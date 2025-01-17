import Svg, { Path } from "react-native-svg";
import { IconProps } from "./iconProps";

export function CalendarIcon({ size = 24, color = "#fff" }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256">
      <Path
        fill={color}
        d="M208 32h-24v-8a8 8 0 00-16 0v8H88v-8a8 8 0 00-16 0v8H48a16 16 0 00-16 16v160a16 16 0 0016 16h160a16 16 0 0016-16V48a16 16 0 00-16-16zM72 48v8a8 8 0 0016 0v-8h80v8a8 8 0 0016 0v-8h24v32H48V48zm136 160H48V96h160v112z"
      />
    </Svg>
  );
}
