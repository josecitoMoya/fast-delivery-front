'use client';
import '../styles/Empty-input.css';
import React, { useState } from 'react';
//Commons
import EmptyInput from '../common/Empty-input';
import Button from '../common/Button';
import DateInput from '../common/DateInput';
import QuantityEditor from '@/common/QuantityEditor';
//Hooks
import useInput from '@/hooks/useInput';
//Services
import Admin_Service from '@/services/admin.services';
const adminService = Admin_Service.getInstance();
//Dto
import { createPackageDto } from '@/services/dto/admin.dto';
//address autocomplete google
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import {
  GoogleMap,
  useLoadScript,
  StandaloneSearchBox,
  Libraries,
} from '@react-google-maps/api';
//Alerts
import {
  PackageEmptyFields,
  PackageWeightExcedsLimit,
  PackageWeightNaN,
} from '@/common/alerts/admin.alerts';
import { useRouter } from 'next/navigation';

const libraries: Libraries = ['places'];

const AddProductContent = () => {
  const [date, setDate] = useState<Date | null>();
  const [quantity, setQuantity] = useState<number>(0);
  const [coords, setCoords] = useState({ lat: 0, lng: 0 });
  const Key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';
  const { value, setValue } = usePlacesAutocomplete();
  const navigate = useRouter();

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: Key,
    libraries,
  });

  const handleDateChange = (newDate: Date | null) => {
    setDate(newDate);
  };

  let clientName = useInput();
  let aditionalInfo = useInput();
  let packageWeigth = useInput();
  let newPackage: createPackageDto = {
    client: clientName.value,
    quantity: quantity,
    destination: value,
    package_weigth: 0,
    additional_information: aditionalInfo.value,
    deadline_date: date ?? null,
    coords: coords,
  };

  const handleCreatePackage = async () => {
    if (!clientName.value || !value || !aditionalInfo.value) {
      PackageEmptyFields();
      return;
    }
    const packageWeigthNumber = parseInt(packageWeigth.value, 10);

    if (!isNaN(packageWeigthNumber)) {
      if (packageWeigthNumber >= 0 && packageWeigthNumber <= 100) {
        await adminService.addNewPackage(newPackage);
        navigate.push('/admin/packages');
      } else {
        PackageWeightExcedsLimit();
      }
    } else {
      PackageWeightNaN();
    }
  };
  const handleSelect = async (address: any) => {
    setValue(address, false);
    const results = await getGeocode({ address });
    const { lat, lng } = getLatLng(results[0]);
    setCoords({ lat: lat, lng: lng });
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <br />
      <div className={`cont-input-address `}>
        {!isLoaded ? (
          <h1>Loading...</h1>
        ) : (
          <GoogleMap mapContainerClassName="map-input-address">
            <StandaloneSearchBox>
              <input
                onBlur={(e) => {
                  handleSelect(e.target.value);
                }}
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
                type="text"
                placeholder="DirecciÃ³n"
                className="input-address"
              />
            </StandaloneSearchBox>
          </GoogleMap>
        )}
      </div>

      <EmptyInput
        color="blue"
        type="text"
        position="mx-auto my-3 w-70"
        placeholder="Nombre De Quien Recibe"
        {...clientName}
      />

      <EmptyInput
        color="blue"
        type="text"
        position="mx-auto my-3 w-70"
        placeholder="Peso Del Paquete (KG)"
        {...packageWeigth}
      />

      <EmptyInput
        color="blue"
        type="text"
        position="mx-auto my-3 w-70"
        placeholder="Informacion Adicional"
        {...aditionalInfo}
      />

      <div className="flex items-center justify-between h-10 p-4 w-[65%]">
        <DateInput
          selected={date}
          setDate={handleDateChange}
          className="w-full h-full border-blue p-4 text-center quantity-container"
        />

        <div className="w-full h-full p-4 border-blue quantity-container">
          <QuantityEditor quantity={quantity} setQuantity={setQuantity} />
        </div>
      </div>

      <Button
        href="/"
        bgc="bg-green text-blue"
        position="mx-auto mb-3 mt-2"
        text="Agregar"
        type="submit"
        onClick={handleCreatePackage}
      />
      <div className="mt-3"></div>
    </div>
  );
};

export default AddProductContent;
