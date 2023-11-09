import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Select from "../../components/Select";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cep, setCEP] = useState("");
  const [bairro, setBairro] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [nCasa, setnCasa] = useState("");
  const [raca, setRaca] = useState("");
  const [porte, setPorte] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const estadosBrasileiros = [
    { value: 'AC', label: 'Acre' },
    { value: 'AL', label: 'Alagoas' },
    { value: 'AP', label: 'Amapá' },
    { value: 'AM', label: 'Amazonas' },
    { value: 'BA', label: 'Bahia' },
    { value: 'CE', label: 'Ceará' },
    { value: 'DF', label: 'Distrito Federal' },
    { value: 'ES', label: 'Espírito Santo' },
    { value: 'GO', label: 'Goiás' },
    { value: 'MA', label: 'Maranhão' },
    { value: 'MT', label: 'Mato Grosso' },
    { value: 'MS', label: 'Mato Grosso do Sul' },
    { value: 'MG', label: 'Minas Gerais' },
    { value: 'PA', label: 'Pará' },
    { value: 'PB', label: 'Paraíba' },
    { value: 'PR', label: 'Paraná' },
    { value: 'PE', label: 'Pernambuco' },
    { value: 'PI', label: 'Piauí' },
    { value: 'RJ', label: 'Rio de Janeiro' },
    { value: 'RN', label: 'Rio Grande do Norte' },
    { value: 'RS', label: 'Rio Grande do Sul' },
    { value: 'RO', label: 'Rondônia' },
    { value: 'RR', label: 'Roraima' },
    { value: 'SC', label: 'Santa Catarina' },
    { value: 'SP', label: 'São Paulo' },
    { value: 'SE', label: 'Sergipe' },
    { value: 'TO', label: 'Tocantins' }
  ];

  const tipoPorte = [
    { value: '', label: 'Porte do Animal'},
    { value: 'P', label: 'Pequeno' },
    { value: 'M', label: 'Médio' },
    { value: 'G', label: 'Grande' }
  ]

  function validaEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email)
  }

  function checaCEP(cep) {
    const newCEP = cep.replace(/\D/g, '');
    if(newCEP.length === 8) {
      fetch(`https://viacep.com.br/ws/${newCEP}/json/`)
      .then(res => res.json()).then(data => {
        console.log(data)
        setBairro(data.bairro)
        setLogradouro(data.logradouro)
        setCidade(data.localidade)
        setEstado(data.uf)
      });
      return newCEP
    }
  }

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email | !senha | !cep | !bairro | !logradouro | !cidade | !estado | !nCasa | !raca | !porte) {
      setError("Preencha todos os campos");
      return;
    } else if (!validaEmail(email)) {
      setError("O e-mail não esta no padrão esperado")
      return;
    } else if (!checaCEP(cep)) {
      setError("CEP inválido");
      return;
    }

    const res = signup(email, senha, cep, bairro, logradouro, cidade, estado, nCasa, raca, porte);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/signin");
  };

  return (
    <C.Container>
      <C.Label>CADASTRAR-SE</C.Label>
      <C.Content>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />

        <Input
          placeholder="Digite seu CEP"
          value={cep}
          onChange={(e) => [setCEP(e.target.value), setError("")]}
          onBlur={() => checaCEP(cep)}
        />

        <Input
          placeholder="Digite seu Bairro"
          value={bairro}
          onChange={(e) => [setBairro(e.target.value), setError("")]}
        />

        <Input
          placeholder="Digite sua Rua"
          value={logradouro}
          onChange={(e) => [setLogradouro(e.target.value), setError("")]}
        />        

        <Input
          placeholder="Digite sua Cidade"
          value={cidade}
          onChange={(e) => [setCidade(e.target.value), setError("")]}
        />

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
          <Select
            value={estado}
            onChange={(e) => [setEstado(e.target.value), setError("")]}
            options={estadosBrasileiros}
          />

          <Input
            placeholder="N° da Casa"
            value={nCasa}
            onChange={(e) => [setnCasa(e.target.value), setError("")]}
          />
        </div>

        <C.LabelSignin>Informações do Animal</C.LabelSignin>

        <Input
          placeholder="Raça"
          value={raca}
          onChange={(e) => [setRaca(e.target.value), setError("")]}
        />

        <Select
          value={porte}
          onChange={(e) => [setPorte(e.target.value), setError("")]}
          options={tipoPorte}
        />


        <C.labelError>{error}</C.labelError>
        <Button Text="Inscrever-se" onClick={handleSignup} />
        <C.LabelSignin>
          Já tem uma conta?
          <C.Strong>
            <Link to="/signin">&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

export default Signup;