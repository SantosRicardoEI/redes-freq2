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

## Modelo de serviço (continuação)

- **QoS (Quality of Service)** — Qualidade de serviço; garantias de qualidade na transmissão (largura de banda, perda, ordem, tempo/atraso). A Internet best effort não oferece QoS forte.

- **ATM Constant Bit Rate (CBR)** — Modelo de serviço que garante taxa constante, ordem e tempo.

- **ATM Available Bit Rate (ABR)** — Modelo de serviço que garante uma largura de banda mínima.

- **IntServ** — Modelo da Internet que tenta dar garantias fortes através de reserva de recursos.

- **DiffServ** — Modelo da Internet que melhora o serviço por classes/prioridades de tráfego.

## IP — Datagrama e fragmentação

- **ICMP** — Protocolo da camada de rede usado para reportar erros e sinalização entre routers (ex.: ping, traceroute).

- **TTL (Time To Live)** — Campo do cabeçalho IPv4 com o n.º máximo de saltos restantes; decrementado a cada router; a 0 o datagrama é descartado.

- **Soma de controlo (checksum)** — Campo do cabeçalho IPv4 que deteta erros no cabeçalho; eliminado no IPv6.

- **MTU (Maximum Transmission Unit)** — Tamanho máximo de dados que cabe numa trama do nível de ligação.

- **Fragmentação** — Partir um datagrama IP grande em fragmentos menores para caber na MTU de uma ligação; ocorre na rede.

- **Reconstituição** — Juntar os fragmentos para recompor o datagrama original; ocorre apenas no destino final.

- **Identificador / flags / offset** — Campos do cabeçalho IPv4 usados para identificar e ordenar os fragmentos de um mesmo datagrama.

## Endereçamento IPv4

- **Interface** — Ligação entre um host/router e uma ligação física; é o que o endereço IP identifica.

- **Sub-rede** — Conjunto de interfaces com os mesmos bits de rede que comunicam entre si sem router intermédio.

- **Máscara de sub-rede** — Indica quantos bits do endereço são parte de rede (`/x`).

- **CIDR (Classless InterDomain Routing)** — Notação `a.b.c.d/x` em que x é o n.º de bits da parte de rede, de comprimento arbitrário.

- **Endereço de rede** — Endereço da sub-rede com todos os bits de host a 0.

- **Endereço de broadcast** — Endereço da sub-rede com todos os bits de host a 1.

- **Endereçamento hierárquico** — Atribuição de endereços em hierarquia (ISP → organizações) que permite anunciar rotas eficientemente.

- **Agregação de rotas** — Anunciar várias sub-redes como um único prefixo, graças ao endereçamento hierárquico.

- **ICANN** — Entidade que aloca blocos de endereços (via 5 Registos Regionais) e gere a zona raiz do DNS.

## DHCP

- **DHCP (Dynamic Host Configuration Protocol)** — Protocolo que dá a um host, automaticamente e ao juntar-se à rede, o seu endereço IP e mais configuração (plug-and-play).

- **DHCP Discover / Offer / Request / ACK** — As 4 mensagens (em broadcast) da troca cliente↔servidor DHCP.

## NAT

- **Endereço privado/local** — Endereço de um espaço reservado (10/8, 172.16/12, 192.168/16) válido só na rede local.

- **Endereço público** — Endereço globalmente único, visível na Internet.

- **NAT (Network Address Translation)** — Mecanismo que permite a toda uma rede local partilhar um único IP público, traduzindo (IP, porto).

- **Tabela NAT** — Tabela do router NAT que guarda as traduções (IP origem, porto) ↔ (IP NAT, novo porto).

- **NAT traversal** — Problema/técnicas para alcançar um servidor que está atrás de um NAT.

## IPv6

- **IPv6** — Protocolo de rede com endereços de 128 bits, cabeçalho fixo de 40 bytes, sem checksum e sem fragmentação na rede.

- **Flow label** — Campo IPv6 que identifica datagramas de um mesmo fluxo.

- **Next header** — Campo IPv6 que identifica o protocolo do nível superior ou o próximo cabeçalho de opções.

- **Hop limit** — Campo IPv6 equivalente ao TTL do IPv4.

- **Tunelamento** — Transportar um datagrama IPv6 como payload de um datagrama IPv4 (pacote dentro de pacote) para atravessar troços só-IPv4.

## Algoritmos de roteamento

- **Grafo (N, E)** — Modelo da rede: N = routers, E = ligações; c(x,y) = custo da ligação direta.

- **Link state** — Algoritmo de roteamento global em que todos os nós conhecem a topologia completa.

- **Dijkstra** — Algoritmo que calcula os caminhos de menor custo de uma origem a todos os nós (usado no link state/OSPF).

- **D(v) / p(v) / N'** — Notação de Dijkstra: estimativa de custo até v, predecessor de v, conjunto de nós já resolvidos.

- **Distance vector** — Algoritmo de roteamento descentralizado em que cada nó troca vetores de distâncias só com vizinhos.

- **Equação de Bellman-Ford** — `Dx(y) = min_v { c(x,v) + Dv(y) }`, base do distance vector.

- **Contagem até ao infinito (count-to-infinity)** — Problema do distance vector em que as "más notícias" propagam devagar, com custos a subir em ciclo.

- **Black-holing** — Erro em distance vector em que um nó anuncia caminhos falsos e atrai/descarta tráfego, propagando-se pela rede.

## Roteamento na Internet

- **Sistema Autónomo (AS) / domínio** — Conjunto de routers sob a mesma administração que corre o mesmo protocolo intra-AS.

- **Roteamento intra-AS (intra-domínio)** — Roteamento entre routers do mesmo AS, focado no desempenho.

- **Roteamento inter-AS (inter-domínio)** — Roteamento entre ASes, onde as políticas têm precedência.

- **Router de gateway** — Router na extremidade de um AS, com ligação a outro(s) AS(es); corre eBGP e iBGP.

- **RIP** — Protocolo intra-AS distance vector clássico (vetores a cada 30 s).

- **EIGRP** — Protocolo intra-AS baseado em distance vector (ex-proprietário Cisco).

- **OSPF (Open Shortest Path First)** — Protocolo intra-AS link state (usa Dijkstra), aberto, com mensagens autenticadas e múltiplos caminhos de igual custo.

- **OSPF hierárquico (área / backbone)** — Organização do OSPF em dois níveis (áreas locais + espinha dorsal) para escalar.

- **BGP (Border Gateway Protocol)** — Protocolo de roteamento inter-AS de facto; a "cola" da Internet; path vector sobre TCP.

- **eBGP / iBGP** — BGP entre ASes (externo) / dentro do AS (interno).

- **Path vector** — Tipo de protocolo (BGP) que anuncia caminhos completos (lista de ASes) até prefixos.

- **AS-PATH** — Atributo BGP com a lista de ASes por onde o anúncio passou.

- **NEXT-HOP** — Atributo BGP que indica o router por onde se chega ao AS do próximo salto.

- **Mensagens BGP (OPEN / UPDATE / KEEPALIVE / NOTIFICATION)** — Abrir sessão / anunciar ou retirar caminho / manter ligação / reportar erro ou fechar.

- **Roteamento batata quente (hot-potato)** — Escolher o gateway de saída com menor custo intra-domínio, livrando-se do pacote o mais depressa possível.

- **Preferência local** — Atributo/decisão de política BGP, primeiro critério na seleção de rotas.
