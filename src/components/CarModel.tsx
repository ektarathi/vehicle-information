import * as React from "react";
import axios from "axios";
import VehicleInformation from "./VehicleInformation";
export interface CarModelProps {
	type: string;
}

const CarModel: React.SFC<CarModelProps> = ({ type }: CarModelProps) => {
    const [modelData, setModelData] = React.useState([] as any);
    const [vehicleInfo, setVehicleInfo] = React.useState(false);
	const [value, setValue] = React.useState("");
    
    React.useEffect(() => {
		const getModelType = async () => {
            try {
                const result = await axios(
                    `http://localhost:8080/api/models?make=${type}`
                );
                setModelData(result.data);
                setVehicleInfo(false);
            } catch (error) {
                console.log(error);
            }
		};
		getModelType();
	},[ type ]);

	const modelValue = (event: any) => {
        setValue(event.currentTarget.value);
        setVehicleInfo(true);
	};
    
	return (
		<React.Fragment>
			{modelData.length !== 0 ? (
                <div className="select">
                    <select
                        className="slct"
                        id="slct"
                        value={value}
                        onChange={modelValue}
                    >
                        {modelData.map((item: any) => (
                            <option key={item} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                </div>
			) : (
				<h3>Sorry no model found for the respective car type.</h3>
			)}
			{vehicleInfo ? <VehicleInformation type={type} model={value} /> : ""}
		</React.Fragment>
	);
};

export default CarModel;
