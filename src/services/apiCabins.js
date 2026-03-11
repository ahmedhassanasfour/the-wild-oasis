import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
}

export async function createCabin(newCabin) {
  const hasImagePath = typeof newCabin.image === "string";

  let imageName, imagePath;

  if (!hasImagePath) {
    imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "");

    imagePath = `https://mzijaxfeaasnutbjxdot.supabase.co/storage/v1/object/public/cabin-image/${imageName}`;
  }

  const { data, error } = await supabase
    .from("cabins")
    .insert([
      {
        ...newCabin,
        image: hasImagePath ? newCabin.image : imagePath,
      },
    ])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be created");
  }

  // upload only if new file
  if (!hasImagePath) {
    const { error: cabinError } = await supabase.storage
      .from("cabin-image")
      .upload(imageName, newCabin.image);

    if (cabinError) {
      await supabase.from("cabins").delete().eq("id", data[0].id);
      throw new Error("Cabin image could not be uploaded ");
    }
  }

  return data;
}
export async function updateCabin(newCabinData, id) {
  const { data, error } = await supabase
    .from("cabins")
    .update(newCabinData)
    .eq("id", id)
    .select();

  if (error) throw new Error(error.message);

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be deleted");
  }

  return data;
}
