/*import Correios, { PrecoPrazoRequest, PrecoPrazoResponse } from 'correios-brasil';

export async function calcularFrete(
  cepDestino: string,
  peso: number,
  formato: number,
  comprimento: number,
  altura: number,
  largura: number
): Promise<{ valor: number }> {
  try {
    const params: PrecoPrazoRequest = {
      nCdServico: ['04014'], // Substitua pelo código do serviço desejado
      sCepOrigem: '08040000', // Substitua pelo CEP de origem
      sCepDestino: cepDestino,
      nVlPeso: peso.toString(), // Convertemos o número para string
      nCdFormato: formato.toString(), // Convertemos o número para string
      nVlComprimento: comprimento.toString(), // Convertemos o número para string
      nVlAltura: altura.toString(), // Convertemos o número para string
      nVlLargura: largura.toString(), // Convertemos o número para string
      nVlDiametro: '0', // Convertemos o número para string
    };

    const resultado: PrecoPrazoResponse[] = await Correios.calcularPrecoPrazo(params);
    
    // Se houver múltiplas opções de serviço, você pode escolher a que deseja, por exemplo, a primeira
    const valor = parseFloat(resultado[0].Valor.replace(',', '.'));

    return { valor };
  } catch (error) {
    console.error('Erro ao calcular o frete:', error);
    throw error;
  }
}
*\