import Svg, { Path } from "react-native-svg";
import { IconProps } from "./iconProps";

export function ArrowRightIcon({ size = 24, color = "#fff" }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256">
      <Path
        fill={color}
        d="M221.66 133.66l-72 72a8 8 0 01-11.32-11.32L196.69 136H40a8 8 0 010-16h156.69l-58.35-58.34a8 8 0 0111.32-11.32l72 72a8 8 0 010 11.32z"
      />
    </Svg>
  );
}
