import { ClosetAll } from "./ClosetAll";
import { ClosetNew } from "./ClosetNew";
import { Wishlist } from "./Wishlist";

export function Content() {
  let products = [
    {
      id: 1,
      name: "Floral sweater",
      image_url: "https://www.thebay.com/product/molly-bracken-printed-fuzzy-knit-sweater-93072404.html",
    },
    {
      id: 2,
      name: "Maxi pleated skirt black",
      image_url:
        "https://www.fringeboutiqueto.com/product/messy-pleat-pebble-sam-fashion/3008?cp=true&sa=false&sbp=false&q=true",
    },
  ];

  return (
    <div>
      <ClosetAll products={products} />
      <ClosetNew />
      <Wishlist />
    </div>
  );
}
