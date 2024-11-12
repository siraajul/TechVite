import axios from "axios";

const BaseURL = "https://basic-blog.teamrabbil.com/api";

//Post Categories
export async function postCategories() {
  let res = await axios.get(BaseURL + "/post-categories");
  if (res.status == 200) {
    return res.data;
  } else {
    [];
  }
}

//Post Latest
export async function postLatest() {
  let res = await axios.get(BaseURL + "/post-newest");
  if (res.status == 200) {
    return res.data;
  } else {
    [];
  }
}

//Post Lists
export async function postByCategory(id) {
  let res = await axios.get(BaseURL + "/post-list" + id);
  if (res.status == 200) {
    return res.data;
  } else {
    [];
  }
}

//Post Details
export async function postDetails(id) {
  let res = await axios.get(BaseURL + "/post-details" + id);
  if (res.status == 200) {
    return res.data;
  } else {
    [];
  }
}
