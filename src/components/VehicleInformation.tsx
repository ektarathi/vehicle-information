import * as React from "react";
import axios from "axios";
export interface VehicleInformationProps {
	type: string;
	model: string;
}

const VehicleInformation: React.SFC<VehicleInformationProps> = ({
	type,
	model,
}: VehicleInformationProps) => {
	const [vehicleInfo, setVehicleInfo] = React.useState([] as any);

	React.useEffect(() => {
		const getVehicleInfo = async () => {
			try {
				const result = await axios(
					`http://localhost:8080/api/vehicles?make=${type}&model=${model}`
				);
				setVehicleInfo(result.data);
			} catch (error) {
				console.log(error);
			}
		};
		getVehicleInfo();

	}, [type, model]);

	const renderHeader = () => {
		let headerElement = [
			"Make",
			"Model",
			"Engine Power PS",
			"Engine Power KW",
			"Fuel",
			"Body",
			"Capacity",
		];

		return headerElement.map((key, index) => {
			return <th key={index}>{key.toUpperCase()}</th>;
		});
	};

	const renderTableData = () => {
		return vehicleInfo.map((info: any, index: any) => {
			return (
				<tr key={index}>
					<td>{info.make}</td>
					<td>{info.model}</td>
					<td>{`${info.enginePowerPS} PS`}</td>
					<td>{`${info.enginePowerKW} KW`}</td>
					<td>{info.fuelType}</td>
					<td>{info.bodyType}</td>
					<td>{info.engineCapacity}</td>
				</tr>
			);
		});
	};

	return (
		<React.Fragment>
			<div className="vehicle-information">
				<table className="table">
					<thead>
						<tr>{renderHeader()}</tr>
					</thead>
					<tbody>{renderTableData()}</tbody>
				</table>
				{vehicleInfo.length === 0 ? <p>No record found</p> : ""}
			</div>
		</React.Fragment>
	);
};

export default VehicleInformation;
