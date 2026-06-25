# Conceitos — Nível de Rede

- **Camada de rede** — Camada responsável por transportar datagramas IP do host emissor até ao host recetor, passando por routers.

- **Datagrama** — Unidade de dados da camada de rede.

- **Datagrama IP** — Pacote da camada de rede usado pelo protocolo IP.

- **Segmento** — Unidade de dados da camada de transporte, criada por TCP ou UDP.

- **Trama** — Unidade de dados da camada de ligação.

- **Encapsulamento** — Processo de colocar dados de uma camada dentro da unidade de dados da camada seguinte.

- **Host emissor** — Dispositivo que cria e envia o datagrama IP.

- **Host recetor** — Dispositivo final que recebe o datagrama IP.

- **Router** — Dispositivo que encaminha datagramas IP entre redes.

- **Cabeçalho IP** — Parte do datagrama IP que contém informação necessária ao encaminhamento.

- **Endereço IP de origem** — Endereço IP do dispositivo que enviou o datagrama.

- **Endereço IP de destino** — Endereço IP do dispositivo final para onde o datagrama deve ir.

- **Encaminhamento** — Ação local de mover um datagrama da porta de entrada para a porta de saída de um router.

- **Roteamento** — Processo de calcular os caminhos que os datagramas devem seguir pela rede.

- **Tabela de encaminhamento** — Tabela usada pelo router para decidir por que interface deve enviar um datagrama.

- **Porta de entrada** — Interface do router por onde o datagrama chega.

- **Porta de saída** — Interface do router por onde o datagrama é enviado.

- **Plano dos dados** — Parte do router que executa o encaminhamento dos datagramas.

- **Plano de controlo** — Parte lógica da rede que calcula caminhos e constrói tabelas de encaminhamento.

- **Algoritmos de roteamento tradicionais** — Algoritmos executados nos routers para calcular caminhos na rede.

- **SDN** — Abordagem em que o controlo da rede é feito por um controlador remoto.

- **Camada de aplicação** — Camada que dá suporte às aplicações usadas pelo utilizador.

- **Camada de transporte** — Camada responsável pela comunicação entre processos/aplicações.

- **Camada de ligação** — Camada responsável pela comunicação entre dispositivos vizinhos.

- **Camada física** — Camada responsável pela transmissão de bits no meio físico.

- **Comunicação processo-processo** — Comunicação entre aplicações, feita pela camada de transporte.

- **Comunicação host-host** — Comunicação entre host emissor e host recetor, feita pela camada de rede.

- **Comunicação entre nós vizinhos** — Comunicação entre dispositivos diretamente ligados, feita pela camada de ligação.

- **Plano de controlo por router** — Modelo em que cada router executa o seu próprio algoritmo de roteamento e troca informação com outros routers para calcular caminhos e construir tabelas de encaminhamento.

- **Modelo de serviço de rede** — Define as garantias que uma rede oferece ao transportar datagramas. Essas garantias podem incluir entrega, atraso máximo, ordem ou largura de banda mínima. No caso da Internet IP, o modelo é best effort: a rede tenta entregar, mas não garante.

- **Best effort** — Modelo simples e escalável em que a rede tenta entregar os datagramas sem garantias. Teve sucesso porque simplifica os routers, permite grande adopção da Internet, e as camadas superiores/aplicações compensam muitas limitações com largura de banda, CDNs, replicação e controlo de congestão.

- **Arquitetura de router** — Organização interna de um router, composta por portos de entrada, tecido de comutação, portos de saída e processador de roteamento.

- **Portos de entrada do router** — Interfaces por onde os datagramas chegam ao router.

- **Portos de saída do router** — Interfaces por onde os datagramas saem do router para o próximo salto.

- **Tecido de comutação** — Parte interna do router que move datagramas dos portos de entrada para os portos de saída corretos.

- **Processador de roteamento** — Componente do router responsável pelo plano de controlo, incluindo roteamento, gestão e atualização de tabelas.

- **Terminação de linha** — Função do nível físico no porto de entrada, responsável por receber bits do meio físico.

- **Processamento do nível de ligação** — Função que processa a trama recebida e extrai o datagrama IP.

- **Procura no porto de entrada** — Consulta da tabela de encaminhamento para descobrir a porta de saída do datagrama.

- **Comutação descentralizada** — Encaminhamento feito diretamente no porto de entrada, usando uma tabela local, para acelerar o processamento.

- **Encaminhamento baseado no destino** — Encaminhamento em que o router decide a saída apenas com base no endereço IP de destino.

- **Encaminhamento generalizado** — Encaminhamento baseado em vários campos do cabeçalho, não apenas no IP de destino.

- **Longest prefix matching** — Regra que escolhe a entrada mais específica da tabela de encaminhamento quando várias correspondem ao destino.

- **Taxa de comutação** — Velocidade a que o tecido de comutação consegue mover datagramas dentro do router.

- **Fila no porto de entrada** — Acumulação de datagramas quando chegam mais depressa do que conseguem entrar no tecido de comutação.

- **Fila no porto de saída** — Acumulação de datagramas quando chegam mais depressa do que conseguem ser transmitidos pela ligação de saída.

- **Buffer** — Memória temporária usada para guardar datagramas em fila.

- **Perda por falta de buffer** — Descarte de datagramas quando a fila/buffer está cheio.

- **Head-of-the-Line Blocking** — Situação em que o primeiro datagrama da fila bloqueia os que estão atrás, mesmo que estes pudessem avançar.

- **Política de eliminação** — Regra que decide que datagrama é descartado quando o buffer está cheio.

- **Escalonamento** — Regra que decide qual datagrama da fila será transmitido a seguir.

- **Escalonamento por prioridades** — Escalonamento em que certos datagramas têm prioridade sobre outros.

- **Plano de controlo no router** — Parte mais lenta, normalmente em software, responsável por calcular rotas e gerir tabelas.

- **Plano dos dados no router** — Parte rápida, normalmente em hardware, responsável por encaminhar datagramas da entrada para a saída.

- **Próximo salto** — Próximo dispositivo para onde o router envia o datagrama no caminho até ao destino.

- **Interface de saída** — Porta escolhida pelo router para enviar o datagrama para o próximo salto.
