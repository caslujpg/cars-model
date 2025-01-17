import Svg, { Path } from "react-native-svg";
import { IconProps } from "./iconProps";

export function GasIcon({ size = 24, color = "#fff" }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256">
      <Path
        fill={color}
        d="M241 69.66l-19.34-19.32a8 8 0 00-11.32 11.32L229.66 81a8 8 0 012.34 5.63V168a8 8 0 01-16 0v-40a24 24 0 00-24-24h-16V56a24 24 0 00-24-24H72a24 24 0 00-24 24v152H32a8 8 0 000 16h160a8 8 0 000-16h-16v-88h16a8 8 0 018 8v40a24 24 0 0048 0V86.63a23.85 23.85 0 00-7-16.97zM64 208V56a8 8 0 018-8h80a8 8 0 018 8v152zm80-96a8 8 0 01-8 8H88a8 8 0 010-16h48a8 8 0 018 8z"
      />
    </Svg>
  );
}
