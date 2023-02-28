import { mixClass, bgMix, textColorMix  } from "@dadmor/pure-baldr-core";

type Props = {
  bg?: string;
  text?: string;
  className?: string;
}
// TODO add paddings
export const Color: React.FC<Props> = ({
  bg = "",
  text = "",
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