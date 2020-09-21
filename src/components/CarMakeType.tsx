import * as React from "react";
import axios from "axios";
import CarModel from "./CarModel";
export interface CarMakeTypeProps {}

const CarMakeType: React.SFC<CarMakeTypeProps> = () => {
	const [makeType, setMakeType] = React.useState([] as any);
	const [value, setValue] = React.useState("");
	const [displayModel, setDisplayModel] = React.useState(false);

	React.useEffect(() => {
		const getMakeType = async () => {
			try {
				const result = await axios("http://localhost:8080/api/makes");
				setMakeType(result.data);
			} catch (error) {
				console.log('error:',error);
			}
		};
		getMakeType();
	}, []);

	const getMakeValue = (event: any) => {
		setValue(event.currentTarget.value);
		setDisplayModel(true);
	};

	return (
		<React.Fragment>
			<div className="select">
				<select
					className="slct"
					id="slct"
					value={value}
					onChange={getMakeValue}
				>
					{makeType.map((item: any) => (
						<option key={item} value={item}>
							{item}
						</option>
					))}
				</select>
			</div>
			{displayModel ? <CarModel type={value} /> : ""}
		</React.Fragment>
	);
};

export default CarMakeType;
