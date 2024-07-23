export default function HoverScrollField ({
    text, style, innerStyle
  }: { 
    text: string, style: string, innerStyle: string
  }){
    return (
      <div className={style + " overflow-hidden"}>
        <p className={innerStyle + " capitalize text-nowrap  hover:whitespace-nowrap hover:text-clip hover:animate-scrolling-text"}>{text}</p>
      </div>
    )
}
