import {  ComponentProps } from "react";

interface TableHeaderPros extends ComponentProps<'th'> {

}
export function TableHeader(props : TableHeaderPros){
    return (
        <th className="py-3 px-4 text-sm font-semibold text-left"{...props}/>
    )
}