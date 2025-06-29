import { Player } from "@lottiefiles/react-lottie-player";

export default function LottieIcon({ src, size = 64, loop = true }) {
  return (
    <Player
      autoplay
      loop={loop}
      src={src}
      style={{ height: size, width: size }}
    />
  );
}
