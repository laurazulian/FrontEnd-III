import React from "react";
class CLassComponent extends React.Component{
    constructor(){
        super()
        this.state ={
            nombre: 'Laura'
        }
    }

    render() {
        return (
            <div>
                <h1>Componente de clase</h1>
            </div>
        )
    }
}

export default CLassComponent;