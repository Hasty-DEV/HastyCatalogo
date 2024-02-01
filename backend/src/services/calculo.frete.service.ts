// services/calculo.frete.service.ts
import axios from 'axios';
import { Request } from 'express';
import dotenv from 'dotenv';

interface PackageDimension {
  height: number;
  width: number;
  length: number;
}

interface Package {
  price: string;
  discount: string;
  format: string;
  weight: string;
  insurance_value: string;
  dimensions: PackageDimension;
}

interface AdditionalServices {
  receipt: boolean;
  own_hand: boolean;
  collect: boolean;
}

interface ShippingCompany {
  id: number;
  name: string;
  picture: string;
}

interface ShippingOption {
  id: number;
  name: string;
  price: string;
  custom_price: string;
  discount: string;
  currency: string;
  delivery_time: number;
  delivery_range: {
    min: number;
    max: number;
  };
  custom_delivery_time: number;
  custom_delivery_range: {
    min: number;
    max: number;
  };
  packages: Package[];
  additional_services: AdditionalServices;
  company: ShippingCompany;
}

export async function calcularFrete(req: Request): Promise<{ menorPreco: string; menorTempo: string; cep: string }> {

  const { cep } = req.body;

  const options = {
    method: 'POST',
    url: 'https://www.melhorenvio.com.br/api/v2/me/shipment/calculate',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: process.env.TOKEN_MELHORENVIO,
      'User-Agent': 'Aplicação hastycatalogo',
    },
    data: {
      from: { postal_code: '01002001' },
      to: { postal_code: cep },
      package: { height: 4, width: 12, length: 17, weight: 0.3 },
    },
  };

  try {
    const response = await axios.request<ShippingOption[]>(options);

    if (!Array.isArray(response.data) || response.data.length === 0) {
      throw new Error('Nenhuma opção de frete retornada pela API do Melhor Envio');
    }

    // Filtrar apenas as opções do Correios
    const correiosOptions = response.data.filter(shippingOption => shippingOption.company.name.toLowerCase() === 'correios');

    if (correiosOptions.length === 0) {
      throw new Error('Nenhuma opção de frete dos Correios retornada pela API do Melhor Envio');
    }

    // Encontrar a opção com o menor preço
    const menorPrecoOption = correiosOptions.reduce((min, option) => parseFloat(option.price) < parseFloat(min.price) ? option : min, correiosOptions[0]);

    // Encontrar a opção com o menor tempo de entrega
    const menorTempoOption = correiosOptions.reduce((min, option) => option.delivery_time < min.delivery_time ? option : min, correiosOptions[0]);

    // Formatar informações da opção com menor preço
    const menorPrecoInfo = `Menor preço - ${menorPrecoOption.company.name} - Tempo de Entrega: ${menorPrecoOption.delivery_range.min} a ${menorPrecoOption.delivery_range.max} dias úteis${menorPrecoOption.price}`;

    // Formatar informações da opção com menor tempo de entrega
    const menorTempoInfo = `Menor tempo de entrega - ${menorTempoOption.company.name} - Tempo de Entrega: ${menorTempoOption.delivery_range.min} a ${menorTempoOption.delivery_range.max} dias úteis${menorTempoOption.price}`;

    return {
      menorPreco: menorPrecoInfo,
      menorTempo: menorTempoInfo,
      cep,
    };
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao calcular frete');
  }
}
