import supabase from "../../utils/supabase"; // Adjusted path to the correct location
export const createUser = async ({
  email,
  password,
  lastName,
  firstName,
  phoneNumber,
  address,
}) => {
  try {
    const { data, error } = await supabase.from("Users").insert({
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      address: address,
    });
  } 
  catch (error) {
    console.error("Error creating user:", error);
  }
};

export const getUser = async (email) => {
  try {
    const { data, error } = await supabase.from("Users").select("*").eq("email", email).single();
    if (error) {
      console.error("Error fetching user:", error);
      return null;
    }
    return data;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  } 
};

export const loginUser = async (email: any, password: any) => {
  try {
    const { data, error } = await supabase.from("Users")
      .select("*")
      .eq("email", email).eq("password", password).single();    
    if (error) {
      console.error("Error logging in:", error);
      return null;
    } 
    return data;
  }

    catch (error) { 
    console.error("Error logging in:", error);
    return null;
  }
};
