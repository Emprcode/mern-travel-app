import React from "react";
import Masonary, { ResponsiveMasonry } from "react-responsive-masonry";
import { galleryImg } from "./imageGalleryList";

export const ImageGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
      <Masonary gutter="1rem">
        {galleryImg.map((item, i) => (
          <img
            className="img-style"
            src={item}
            key={i}
            alt="images"
            style={{ width: "100%", display: "block", borderRadius: "10px" }}
          />
        ))}
      </Masonary>
    </ResponsiveMasonry>
  );
};
