import { useTripsLists, createTrip } from "../../hooks/requests";
import React from "react";
import { useHistory } from "react-router-dom";
import { Input, FormButton, FormDiv,FormContainer } from "../../constants/Styled/Styled";
import useForm from "../../hooks/useForm"
import { PlanetsList } from "../planetsList/PlanetsList";

const date = new Date();
const minDate = `${date.getUTCDay()}/${date.getMonth()}/${date.getFullYear()}`

export function CreateTripForm() {
  const [form, onChange, cleanFields] = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: ""
  })

  const history = useHistory();
  const trips = useTripsLists();

  const submitCreation = (event) => {
    event.preventDefault();
    createTrip(form)
    cleanFields();
  };

  return (
    <FormContainer>
      <form onSubmit={submitCreation}>

        <Input
          name={"name"}
          value={form.name}
          onChange={onChange}
          placeholder="Nome da viagem"
          required
          pattern={"^.{3,}"}
          title={"O nome deve ter no mínimo 3 caracteres"}
        />

        <PlanetsList
          planet={form.planet}
          onChange={onChange}
        />

        <Input
          name={"date"}
          value={form.date}
          onChange={onChange}
          type="date"
          min={`${minDate}`}
          required
        />

        <Input
          name={"description"}
          value={form.description}
          onChange={onChange}
          placeholder="Descrição"
          required
          pattern={"^.{30,}"}
          title={"Deve ter no mínimo 30 caracteres"}
        />

        <Input
          name={"durationInDays"}
          value={form.durationInDays}
          onChange={onChange}
          type="number"
          min={50}
          required
          placeholder="Duração"
        />

        <FormDiv>
          <FormButton >
            Criar
          </FormButton>
        </FormDiv>

      </form>

    </FormContainer>
  );
}