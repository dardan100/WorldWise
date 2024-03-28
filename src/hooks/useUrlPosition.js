import { useSearchParams } from "react-router-dom";

export default function useUrlPosition() {
  const [searchParmas] = useSearchParams();
  const lat = searchParmas.get("lat");
  const lng = searchParmas.get("lng");

  return [lat, lng];
}
