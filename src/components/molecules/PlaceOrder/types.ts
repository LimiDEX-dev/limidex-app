export interface PlaceOrderProps {
  isExpertMode: boolean;
  setIsExpertMode: (value: boolean) => void;
  activeTab: "limit" | "swap" | "cross";
  setActiveTab: (value: "limit" | "swap" | "cross") => void;
}
