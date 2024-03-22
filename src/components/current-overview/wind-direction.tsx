import { LuArrowDownToDot } from 'react-icons/lu';

type Props = { windDeg: number };

export default function WindDirection({ windDeg }: Props) {
  const direction = Math.floor(windDeg / 22.5 + 0.5) % 16; // Convert degrees to cardinal direction index (0-15)

  const degAngle = direction * 22.5; // Calculate angle based on direction index

  const styles = {
    transform: `rotate(${degAngle}deg)`,
  };

  return (
    <div className="w-fit">
      <LuArrowDownToDot style={styles} className="size-10 text-[#2193b0]/70" />
    </div>
  );
}
