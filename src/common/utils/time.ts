export default function tempoParaSegundos(tempo: string){
  const [horas = '00', minutos = '00', segundos = '00'] = tempo.split(':');

  const horasEmSegundos = Number(horas) * 3600;
  const minutosEmSegundos = Number(minutos) * 60;
  
  return horasEmSegundos + minutosEmSegundos + Number(segundos);
}