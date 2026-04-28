import PhotoCard from "@/components/PhotoCard";
import React from "react";

const AllPhotosPage = async () => {
  const res = await fetch("https://pixgen-xi.vercel.app/data.json");
  const photos = await res.json();
  console.log(photos, "photos");
  // const filteredPhotos = category
  //   ? photos.filter(
  //       (photo) => photo.category.toLowerCase() == category.toLowerCase(),
  //     )
  //   : photos;
  return (
    <div>
      <h1 className="text-2xl font-bold m-4">All Photos</h1>
      <div className="grid grid-cols-4 gap-5">
        {/* {filteredPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))} */}
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo}></PhotoCard>
        ))}
      </div>
    </div>
  );
};

export default AllPhotosPage;
