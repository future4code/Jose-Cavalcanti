import { useTripsLists, applyToTrip } from "../../hooks/requests";
import React from "react";
import { CountriesList } from "../../components/countriesList/CountriesList";
import {FormButton, Input, Select, FormDiv, FormContainer} from "../../constants/Styled/Styled";
import useForm from "../../hooks/useForm"

export function ApplicationForm() {
  const [form, onChange, cleanFields] = useForm({
    applicationText: "",
    profession: "",
    country: "",
    age: "",
    name: "",
    id: ""
  })

  const trips = useTripsLists();

  const sendForm = (event) => {
    event.preventDefault();
    applyToTrip(form)
    cleanFields();
  };

  return (
    <div>
      <FormContainer onSubmit={sendForm}>
        <Select
          name="id"
          onChange={onChange}
          placeholder="Escolha uma viagem"
          value={form.id}
          required
        >
          {trips.map((trip) => {
            return (
              <option key={trip.id} value={trip.id}>
                {trip.name}
              </option>
            );
          })}
        </Select>

        <Input
          name={"name"}
          value={form.name}
          onChange={onChange}
          placeholder="Nome"
          required
          pattern={"^.{3,}"}
          title={"O nome deve ter no mínimo 3 caracteres"}
          colorScheme="whiteAlpha"
        />

        <Input
          name={"age"}
          value={form.age}
          onChange={onChange}
          type="number"
          min={18}
          placeholder="Idade"
          required
        />

        <Input
          name={"applicationText"}
          value={form.applicationText}
          onChange={onChange}
          placeholder="Texto de candidatura"
          required
          pattern={"^.{30,}"}
          title={"Deve ter no mínimo 30 caracteres"}
        />

        <Input
          name={"profession"}
          value={form.profession}
          onChange={onChange}
          placeholder="Profissão"
          required
          pattern={"^.{10,}"}
          title={"Deve ter no mínimo 10 caracteres"}
        />

        <CountriesList
          country={form.country}
          setCountry={onChange}
        />

        <FormDiv>
          <FormButton
            colorScheme="brand"
            size="lg"
            color="#251D44"
          >
            Enviar
          </FormButton>
        </FormDiv>

      </FormContainer>


    </div>
  );
}