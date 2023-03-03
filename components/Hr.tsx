import { mixClass } from "@dadmor/pure-baldr-core";
import { DimentionsType } from "@dadmor/pure-baldr-core";

type Props = {
  className?: string;
  vertical?: boolean;
  spacing?: DimentionsType;
};
export const Hr: React.FC<Props> = ({
  vertical = false,
  spacing = null,
  className = "",
}) => {
  return (
    <div
      className={mixClass({
        "border-t": !vertical,
        "border-r w-px h-full self-normal": vertical,
        "pb-10 mt-10": spacing === "xl",
        [className]: true,
      })}
    ></div>
  );
};
// export default HStack;
