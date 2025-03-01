import { useParams } from "react-router-dom";
import TourDetail from "../components/Tours/TourDetail";

const TourDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <TourDetail tourId={id || ""} />
    </div>
  );
};

export default TourDetailPage;
