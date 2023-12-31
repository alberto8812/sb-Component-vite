import './MyLabel.css'

interface Props{
  /**
   * texto displayed 
   */
  label: string;
  /**
   * 
   */
  size?:'normal'| 'h1'| 'h2'| 'h3';
  allcaps?: boolean;
  color?:'text-primary'|'text-secondary'|'text-tertiary'
  fontColor?:string;
  /**
   * allcaps:boolean
   * color:text-primary|text-secondary|text-secondary
   * fontcolor:string
   */
  backgroundColor?:string;
}

export const MyLabel = ({
  label
  ,size
  ,allcaps
  ,fontColor
  ,color
  , backgroundColor='transparent'
}:Props) => {
  return (
    <span className={`${size} ${color}`} style={{color:fontColor,backgroundColor}}>{allcaps?label.toUpperCase():label.toLowerCase()}</span>
  )
}

