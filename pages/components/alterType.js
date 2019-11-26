import Select,{ components } from 'react-select';
import ass from '../style.css' 




export const Container = props => (
    <div className={ass.ContainerStyle}>
      <components.Container {...props} />  
    </div>
);
export class AlterType extends React.Component{
    constructor(props){
        super(props);
        this.handleSelect = this.handleSelect.bind(this)
       
    }
 
    handleSelect(newValue, actionMeta){
        let name1 = this.props.name

        if(actionMeta.action == "select-option"){
            let option = newValue.value
            this.props.onChange(name1, option)
        }
        else if(actionMeta.action == "clear"){
            let option = ''
            this.props.onChange(name1, option)
        }
        
    }
  
    render(){
        return(
            <div>
                <Select                                   
                    classNamePrefix="select"
                    isClearable="true"                            
                    isSearchable="true"
                    name= {this.props.name}
                    value= {this.props.value}
                    readOnly = {this.props.readOnly}
                    placeholder = {this.props.placeholder}       
                    onChange = {this.handleSelect}
                    options={this.props.options}
                    styles={{
                        container: ()=>({
                            border:"1px solid #ffcc99",
                            width:"100%",
                        }),
                        valueContainer:()=>({
                            border:"none"
                        }),
                        menu:()=>({
                            position:"relative",
                        }),
                        menuPortal:()=>({
                            border:"1px solid #ffcc99",
                            width:"100%",
                        })
                    }}
                />
                            
            </div>                                                                              
            
        )
    }
}


