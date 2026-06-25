# Introdução ao Nível de Rede — Resumo

## 1. Função da camada de rede

A **camada de rede** é responsável por transportar **datagramas IP** desde o **host emissor** até ao **host recetor**, passando pelos routers intermédios.

host emissor → routers intermédios → host recetor

A camada de rede usa:

- endereços IP;
- datagramas IP;
- routers;
- tabelas de encaminhamento;
- protocolos de roteamento.

---

## 2. Datagramas

Um **datagrama** é a unidade de dados da camada de rede.

Na Internet, o protocolo principal da camada de rede é o **IP**, por isso falamos em **datagramas IP**.

Um datagrama IP contém:

[ Cabeçalho IP ][ Dados ]

O cabeçalho IP inclui informação usada para encaminhar o datagrama, como:

- endereço IP de origem;
- endereço IP de destino;
- TTL;
- protocolo da camada superior;
- informação de fragmentação.

---

## 3. Relação com outras camadas

A camada de rede fica entre a camada de transporte e a camada de ligação.

Aplicação
Transporte
Rede
Ligação
Físico

Cada camada tem uma função:

- **Aplicação** — suporte às aplicações, como HTTP, FTP e SMTP.
- **Transporte** — comunicação processo-processo, usando TCP ou UDP.
- **Rede** — comunicação host origem até host destino, usando IP.
- **Ligação** — comunicação entre dispositivos vizinhos, usando Ethernet, WiFi ou PPP.
- **Físico** — transmissão de bits.

---

## 4. Encapsulamento

No emissor, a camada de rede recebe um segmento da camada de transporte e encapsula-o num datagrama IP.

Segmento TCP/UDP → Datagrama IP → Trama

No recetor, acontece o processo inverso:

Trama → Datagrama IP → Segmento TCP/UDP

---

## 5. Participantes na camada de rede

Na camada de rede participam:

- host emissor;
- routers intermédios;
- host recetor.

O **emissor** cria o datagrama IP.

Os **routers** encaminham o datagrama com base no endereço IP de destino.

O **recetor** recebe o datagrama e entrega o conteúdo à camada de transporte.

---

## 6. Encaminhamento

O **encaminhamento** é a ação local de um router receber um datagrama numa porta de entrada e enviá-lo por uma porta de saída.

Datagrama entra → router consulta tabela → datagrama sai

Resumo:

- é local;
- acontece dentro de cada router;
- usa a tabela de encaminhamento;
- decide a porta/interface de saída.

---

## 7. Roteamento

O **roteamento** é o processo que calcula os caminhos que os datagramas devem seguir pela rede.

O roteamento constrói e atualiza as tabelas de encaminhamento usadas pelos routers.

Resumo:

- é mais global;
- calcula caminhos;
- usa algoritmos/protocolos de roteamento;
- define como chegar ao destino.

---

## 8. Diferença entre encaminhamento e roteamento

Encaminhamento = ação local de enviar o datagrama pela porta certa.

Roteamento = processo de calcular o caminho até ao destino.

Frase para decorar:

O roteamento calcula a rota; o encaminhamento aplica essa rota em cada router.

---

## 9. Plano dos dados

O **plano dos dados** é a parte do router responsável por executar o encaminhamento.

Faz:

- receção de datagramas;
- leitura do cabeçalho IP;
- consulta da tabela de encaminhamento;
- envio para a porta de saída correta.

Resumo:

Plano dos dados = executa o encaminhamento.

---

## 10. Plano de controlo

O **plano de controlo** é a parte lógica da rede responsável por calcular caminhos e construir tabelas de encaminhamento.

Faz:

- cálculo de rotas;
- execução de algoritmos de roteamento;
- atualização de tabelas;
- gestão da lógica de encaminhamento.

Resumo:

Plano de controlo = decide os caminhos.

---

## 11. Diferença entre plano dos dados e plano de controlo

Plano dos dados = executa.

Plano de controlo = decide.

Ou seja:

Plano dos dados → encaminhamento.
Plano de controlo → roteamento.

---

## 12. Plano de controlo por router

No **plano de controlo por router**, cada router tem o seu próprio algoritmo de roteamento.

Os routers trocam informação entre si para calcular caminhos e atualizar as suas tabelas de encaminhamento.

Resumo:

Cada router tem lógica de roteamento própria, mas todos colaboram entre si.

---

## 13. Modelo de serviço de rede

O **modelo de serviço de rede** define que garantias a camada de rede oferece ao transportar datagramas.

Essas garantias podem incluir:

- entrega garantida;
- entrega dentro de um tempo máximo;
- entrega ordenada;
- largura de banda mínima;
- controlo do espaçamento entre pacotes.

---

## 14. Best effort

A Internet IP usa o modelo **best effort**.

Isto significa que a rede tenta entregar os datagramas, mas não garante:

- entrega com sucesso;
- entrega por ordem;
- atraso máximo;
- largura de banda mínima;
- ausência de perdas.

Resumo:

Best effort = a rede tenta entregar, mas não promete garantias.

---

## 15. Porque a Internet usa best effort

A Internet usa best effort porque é um modelo:

- simples;
- escalável;
- fácil de implementar;
- flexível;
- adequado a uma rede mundial com muitos operadores e milhões de dispositivos.

Garantias mais fortes tornariam os routers mais complexos, porque teriam de reservar recursos, guardar estado dos fluxos e controlar atrasos/perdas.

---

## 16. QoS

**QoS** significa **Quality of Service**, ou Qualidade de Serviço.

Refere-se a garantias de qualidade na transmissão, como:

- largura de banda;
- perda;
- ordem;
- tempo/atraso.

A Internet IP normal não oferece QoS forte, porque usa best effort.

---

## 17. Modelos com garantias

Algumas arquiteturas ou modelos podem oferecer mais garantias do que a Internet best effort.

Exemplos:

- **ATM Constant Bit Rate** — pode garantir taxa constante, ordem e tempo.
- **ATM Available Bit Rate** — pode garantir uma largura de banda mínima.
- **IntServ** — tenta oferecer garantias fortes na Internet através de reserva de recursos.
- **DiffServ** — tenta melhorar o serviço através de classes/prioridades de tráfego.

O mais importante é perceber que estes modelos dão mais garantias, mas também aumentam a complexidade.

---

## Ideia final da introdução

A camada de rede transporta datagramas IP do emissor até ao recetor. Para isso, os routers encaminham datagramas com base no endereço IP de destino. O plano de controlo calcula os caminhos e o plano dos dados executa o encaminhamento. A Internet IP usa best effort: tenta entregar os datagramas, mas não garante entrega, ordem, tempo nem largura de banda.
