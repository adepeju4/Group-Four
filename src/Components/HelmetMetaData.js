/* eslint-disable react/prop-types */
import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import baseUrl from "../utils/BaseUrl";

export default function HelmetMetaData() {
  let location = useLocation();
  let currentUrl = baseUrl + location.pathname;
  let quote = "Fodine Meals and Taste for Culture";

  let title = "Foodine";
  let image =
    "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";
  let description =
    "Foodine lets you experience the amazing meal choices. We discover the hidden gems in the nearby to help you connect with various cultures and meal diversities" +
    "Trust us, Our services are reliable and delivery is free for the first ten orders!" +
    "So, join us and get food delivered to you as soon as possible";
  let hashtag = "#Foodine";
  return (
    <Helmet>
      <title>{title}</title>
      <meta charset="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="csrf_token" content="" />
      <meta property="type" content="website" />
      <meta property="url" content={currentUrl} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="_token" content="" />
      <meta name="robots" content="noodp" />
      <meta property="title" content={title} />
      <meta property="quote" content={quote} />
      <meta name="description" content={description} />
      <meta property="image" content={image} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:quote" content={quote} />
      <meta property="og:hashtag" content={hashtag} />
      <meta property="og:image" content={image} />
      <meta content="image/*" property="og:image:type" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content="CampersTribe" />
      <meta property="og:description" content={description} />{" "}
    </Helmet>
  );
}
