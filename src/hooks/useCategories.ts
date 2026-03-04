import supabase from "../../utils/supabase";
export const getCategories = async () => {
  try {
    const { data, error } = await supabase.from("Categories").select("*");
    if (error) {
      console.error("Error fetching categories:", error);
      return [];
    }
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};
