const Image = (props) => {
const {
  alt,
  src,
  ...restProps
} = props;
if(!alt){
  throw new Error(`alt attribute is must for images: ${src}`);
}
return <img src={src} alt={alt} {...restProps}></img>
};
Image.displayName = 'Image';
export default Image;