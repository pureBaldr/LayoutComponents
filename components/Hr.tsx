import { mixClass } from "@dadmor/pure-baldr-core";
import { DimentionsType } from "@dadmor/pure-baldr-core";

type Props = {
  className?: string;
  vertical?: boolean;
  spacing?: DimentionsType;
};
export const Hr: React.FC<Props> = ({
  vertical = false,
  spacing = "md",
  className = "",
}) => {
  return (
    <div
      className={mixClass({
        "border-t w-full": !vertical,
        "border-r w-px": vertical,
        "pl-12 mr-12": spacing === "2xl" && vertical,
        "pb-12 mt-12": spacing === "2xl" && !vertical,

        "pl-9 mr-9": spacing === "xl" && vertical,
        "pb-9 mt-9": spacing === "xl" && !vertical,
        
        "pl-6 mr-6": spacing === "md" && vertical,
        "pb-6 mt-6": spacing === "md" && !vertical,
        
        "pl-3 mr-3": spacing === "lg" && vertical,
        "pb-3 mt-3": spacing === "lg" && !vertical,
        
        "pl-1.5 mr-1.5": spacing === "sm" && vertical,
        "pb-1.5 mt-1.5": spacing === "sm" && !vertical,
        
        "pl-0.5 mr-0.5": spacing === "xs" && !vertical,
        "pb-0.5 mt-0.5": spacing === "xs" && !vertical,
        [className]: true,
      })}
    ></div>
  );
};
// export default HStack;
