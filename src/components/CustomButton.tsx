type TCustomButton = {
    label: string;
    variant?: "solid" | "outlined";
    className?: string;
}

const CustomButton = ({label, variant = "solid", className}:TCustomButton) => {
  return (
    <button 
        className={` 
            border transition text-[#111111] font-extrabold rounded-[6.25rem] w-[10rem] h-[3rem]
            ${variant === "solid" && "bg-gradient-to-r from-primary to-[#FFE68FD6] border-transparent hover:from-background hover:to-background hover:border-primary hover:text-primary"}
            ${variant === "outlined" && "bg-transparent border-primary text-primary hover:bg-gradient-to-r hover:from-primary hover:to-[#FFE68FD6] hover:text-background"}
            ${className}
        `}>
            {label}
    </button>
  )
}

export default CustomButton