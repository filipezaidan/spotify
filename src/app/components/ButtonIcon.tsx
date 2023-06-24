import Image from "next/image";

interface IButtonIcon {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export const ButtonIcon = ({ src, width, height, alt }: IButtonIcon) => {
  return (
    <button>
      <Image src={src} width={width} height={height} alt={alt} />
    </button>
  );
};
