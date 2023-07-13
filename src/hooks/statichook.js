// import { useState } from "react";
import { constant } from "@/constant";

import axios from "axios";

// #F80000,#4500F8,#000000
// red, blue,black

// <p><span style="background-color: rgb(247, 247, 248); color: rgb(55, 65, 81);">A fire is a devastating event that can occur unexpectedly, posing a significant threat to life, property, and peace of mind. While we hope never to experience a house fire, it is essential to be prepared for such emergencies. One crucial safety measure every household should implement is the presence of a fire extinguisher. In this blog post, we will explore the reasons why having a fire extinguisher at home is of utmost i</span>mportance.</p>

const Statichook = () => {
  const catCount = async () => {
    const data = await axios.post(
      "http://localhost/women/php/process.php",
      {
        message: "categorycount",
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return data.data;
  };

  const hitCount = async () => {
    const data = await axios.post(
      "http://localhost/women/php/process.php",
      {
        message: "hit",
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return data.data;
  };

  const commentCount = async () => {
    const data = await axios.post(
      "http://localhost/women/php/process.php",
      {
        message: "commentcount",
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return data.data;
  };

  const postCount = async () => {
    const data = await axios.post(
      "http://localhost/women/php/process.php",
      {
        message: "postcount",
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return data.data;
  };

  const quesCount = async () => {
    const data = await axios.post(
      "http://localhost/women/php/process.php",
      {
        message: "questioncount",
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return data.data;
  };
  const getCategory = async () => {
    const data = await axios.post(
      "http://localhost/women/php/process.php",
      {
        message: "getcategory",
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return data.data;
  };
  const getComment = async () => {
    const data = await axios.post(
      "http://localhost/women/php/process.php",
      {
        message: "getcomment",
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return data.data;
  };

  return {
    catCount,
    hitCount,
    getCategory,
    commentCount,
    postCount,
    quesCount,
    getComment,
  };
};

export default Statichook;
