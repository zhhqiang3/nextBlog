import Image from "next/image"
import { useMDXComponent } from "next-contentlayer/hooks"
import Link from "next/link"



const ResponsiveImage = (props) => (
  <Image
    alt={props.alt}
    width={1920}
    height={1080}
    quality={100}
    {...props}
  />
);

const ResponsivePhoto = (props) => (
  <Image
    alt={props.alt}
    width={1920}
    height={1080}
    quality={100}
    {...props}
    className="rounded-xl shadow-xl"
  />
);

const components = {
  img: ResponsiveImage,
  /* a: Link */
  /* Link with hash doesn't seem to work in next13.  https://github.com/vercel/next.js/issues/42157 */
};

const componentswithphoto = {
  img: ResponsivePhoto,
}

export function MDXComponent({ code, layout }) {
  const Component = useMDXComponent(code)

  return<Component components={layout==="photo"?componentswithphoto:components} />  
}