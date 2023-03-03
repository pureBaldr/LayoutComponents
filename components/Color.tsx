import { mixClass, bgMix, textColorMix  } from "@dadmor/pure-baldr-core";
import { ColorType } from "@dadmor/pure-baldr-core"
import { ReactNode } from "react";

type Props = {
  bg?: ColorType;
  text?: ColorType;
  className?: string;
  children: ReactNode;
}
// TODO add paddings
export const Color: React.FC<Props> = ({
  bg = null,
  text = null,
  className = "",
  children,
}) => {
  return (
    <div
      className={mixClass({
        [className]: className,
        ...bgMix(bg),
        ...textColorMix(text),
      })}
    >
      {children}
    </div>
  );
};
export default Color;