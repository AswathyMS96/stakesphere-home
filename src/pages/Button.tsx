import pdfFile from '../assets/stakesphere-whitepaper.pdf'


const Button = (props: any) => {
  const { height, width, bgColor, textColor, text } = props;

  console.log("walett",text)
  const attributes =
    text === "LAUNCH APP" ||text === "STAKE NOW" ? { href: "http://alpha.stakesphere.io/" ,target:"_blank" } : 
    text==="LEARN MORE"? { href: pdfFile ,target:"_blank" }:
    {href:""};

  return (
    <a role="button" {...attributes} className={`${height} ${width} ${bgColor} ${textColor}`}>
        {text}
    </a>

  );
};

export default Button;
