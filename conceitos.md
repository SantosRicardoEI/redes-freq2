# Conceitos — Nível de Rede (Aula 4)

> Cada secção corresponde a um ficheiro de resumo (o `(→ x.y)` indica qual).

## Introdução ao nível de rede (→ 4.1)

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

- **Entrada da tabela de encaminhamento** — Associação entre um prefixo de destino e uma interface/porta de saída.

- **Porta de entrada** — Interface do router por onde o datagrama chega.

- **Porta de saída** — Interface do router por onde o datagrama é enviado.

- **Plano dos dados** — Parte do router que executa o encaminhamento dos datagramas.

- **Plano de controlo** — Parte lógica da rede que calcula caminhos e constrói tabelas de encaminhamento.

- **Algoritmos de roteamento tradicionais** — Algoritmos executados nos routers para calcular caminhos na rede.

- **SDN** — Abordagem em que o controlo da rede é feito por um controlador remoto.

- **Controlador remoto (SDN)** — Entidade lógica que calcula/instala regras de encaminhamento nos routers/switches, separando mais claramente controlo e dados.

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

- **Sem garantias IP** — No best effort não há garantia de entrega, ordem, atraso, jitter ou largura de banda mínima.

## Dentro de um router (→ 4.2)

- **Arquitetura de router** — Organização interna de um router, composta por portos de entrada, tecido de comutação, portos de saída e processador de roteamento.

- **Portos de entrada do router** — Interfaces por onde os datagramas chegam ao router.

- **Portos de saída do router** — Interfaces por onde os datagramas saem do router para o próximo salto.

- **Tecido de comutação** — Parte interna do router que move datagramas dos portos de entrada para os portos de saída corretos.

- **Processador de roteamento** — Componente do router responsável pelo plano de controlo, incluindo roteamento, gestão e atualização de tabelas.

- **Terminação de linha** — Função do nível físico no porto de entrada, responsável por receber bits do meio físico.

- **Processamento do nível de ligação** — Função que processa a trama recebida e extrai o datagrama IP.

- **Procura no porto de entrada** — Consulta da tabela de encaminhamento para descobrir a porta de saída do datagrama.

- **Comutação descentralizada** — Encaminhamento feito diretamente no porto de entrada, usando uma tabela local, para acelerar o processamento.

- **Velocidade da linha** — Ritmo a que um porto consegue processar/encaminhar pacotes tão depressa quanto eles chegam pela ligação.

- **Encaminhamento baseado no destino** — Encaminhamento em que o router decide a saída apenas com base no endereço IP de destino.

- **Encaminhamento generalizado** — Encaminhamento baseado em vários campos do cabeçalho, não apenas no IP de destino.

- **Longest prefix matching** — Regra que escolhe a entrada mais específica da tabela de encaminhamento quando várias correspondem ao destino.

- **Rota por defeito** — Entrada da tabela usada quando nenhum prefixo mais específico corresponde ao destino.

- **Taxa de comutação** — Velocidade a que o tecido de comutação consegue mover datagramas dentro do router.

- **Tecido ideal N × R** — Num router com N portas de entrada de taxa R, idealmente o tecido comuta perto de N vezes R para evitar filas internas.

- **Fila no porto de entrada** — Acumulação de datagramas quando chegam mais depressa do que conseguem entrar no tecido de comutação.

- **Fila no porto de saída** — Acumulação de datagramas quando chegam mais depressa do que conseguem ser transmitidos pela ligação de saída.

- **Buffer** — Memória temporária usada para guardar datagramas em fila.

- **Perda por falta de buffer** — Descarte de datagramas quando a fila/buffer está cheio.

- **Head-of-the-Line Blocking** — Situação em que o primeiro datagrama da fila bloqueia os que estão atrás, mesmo que estes pudessem avançar.

- **Política de eliminação** — Regra que decide que datagrama é descartado quando o buffer está cheio.

- **Escalonamento** — Regra que decide qual datagrama da fila será transmitido a seguir.

- **FIFO** — Escalonamento por ordem de chegada; o primeiro datagrama a chegar é o primeiro a sair.

- **Escalonamento por prioridades** — Escalonamento em que certos datagramas têm prioridade sobre outros.

- **Plano de controlo no router** — Parte mais lenta, normalmente em software, responsável por calcular rotas e gerir tabelas.

- **Plano dos dados no router** — Parte rápida, normalmente em hardware, responsável por encaminhar datagramas da entrada para a saída.

- **Próximo salto** — Próximo dispositivo para onde o router envia o datagrama no caminho até ao destino.

- **Interface de saída** — Porta escolhida pelo router para enviar o datagrama para o próximo salto.

## Modelo de serviço de rede (→ 4.1)

- **QoS (Quality of Service)** — Qualidade de serviço; garantias de qualidade na transmissão (largura de banda, perda, ordem, tempo/atraso). A Internet best effort não oferece QoS forte.

- **ATM Constant Bit Rate (CBR)** — Modelo de serviço que garante taxa constante, ordem e tempo.

- **ATM Available Bit Rate (ABR)** — Modelo de serviço que garante uma largura de banda mínima.

- **IntServ** — Modelo da Internet que tenta dar garantias fortes através de reserva de recursos.

- **DiffServ** — Modelo da Internet que melhora o serviço por classes/prioridades de tráfego.

## IP — Datagrama e fragmentação (→ 4.3)

- **Protocolo IP** — Define o formato dos datagramas, o endereçamento e as regras básicas de tratamento dos pacotes.

- **ICMP** — Protocolo da camada de rede usado para reportar erros e sinalização entre routers (ex.: ping, traceroute).

- **Cabeçalho IPv4** — Parte inicial do datagrama IPv4; tem 20 bytes sem opções e contém campos usados para encaminhamento, fragmentação e entrega ao protocolo superior.

- **Versão** — Campo que indica a versão do protocolo IP (4 no IPv4).

- **Comprimento do cabeçalho** — Campo que indica o tamanho do cabeçalho IPv4, que pode variar se houver opções.

- **Tipo de serviço** — Campo usado para diferenciar classes/tipos de tráfego.

- **Comprimento total** — Campo com o tamanho total do datagrama IPv4: cabeçalho + dados.

- **Protocolo do nível superior** — Campo que indica a quem entregar o payload no destino (ex.: TCP ou UDP).

- **TTL (Time To Live)** — Campo do cabeçalho IPv4 com o n.º máximo de saltos restantes; decrementado a cada router; a 0 o datagrama é descartado.

- **Soma de controlo (checksum)** — Campo do cabeçalho IPv4 que deteta erros no cabeçalho; eliminado no IPv6.

- **Endereços IP de origem/destino** — Campos de 32 bits do cabeçalho IPv4 que identificam as interfaces de origem e destino final.

- **Opções IPv4** — Campos opcionais, raros, que podem pedir funções extra como registar rota ou timestamp.

- **Payload IP** — Dados transportados no datagrama IP; tipicamente um segmento TCP ou UDP.

- **Overhead IP/TCP típico** — Num segmento TCP sobre IPv4 sem opções há 20 bytes de IP + 20 bytes de TCP = 40 bytes de cabeçalhos.

- **MTU (Maximum Transmission Unit)** — Tamanho máximo de dados que cabe numa trama do nível de ligação.

- **Fragmentação** — Partir um datagrama IP grande em fragmentos menores para caber na MTU de uma ligação; ocorre na rede.

- **Reconstituição** — Juntar os fragmentos para recompor o datagrama original; ocorre apenas no destino final.

- **Identificador / flags / offset** — Campos do cabeçalho IPv4 usados para identificar e ordenar os fragmentos de um mesmo datagrama.

- **Offset de fragmento** — Posição dos dados do fragmento dentro do datagrama original; é medido em unidades de 8 bytes.

## Endereçamento IPv4 (→ 4.4)

- **Interface** — Ligação entre um host/router e uma ligação física; é o que o endereço IP identifica.

- **Sub-rede** — Conjunto de interfaces com os mesmos bits de rede que comunicam entre si sem router intermédio.

- **Parte de rede / parte de host** — Num endereço IP, os bits mais significativos identificam a sub-rede; os restantes identificam a interface dentro dessa sub-rede.

- **Máscara de sub-rede** — Indica quantos bits do endereço são parte de rede (`/x`).

- **CIDR (Classless InterDomain Routing)** — Notação `a.b.c.d/x` em que x é o n.º de bits da parte de rede, de comprimento arbitrário.

- **Endereço de rede** — Endereço da sub-rede com todos os bits de host a 0.

- **Endereço de broadcast** — Endereço da sub-rede com todos os bits de host a 1.

- **Número de hosts numa sub-rede `/x`** — Aproximadamente `2^(32-x) - 2`, descontando endereço de rede e broadcast.

- **Endereçamento hierárquico** — Atribuição de endereços em hierarquia (ISP → organizações) que permite anunciar rotas eficientemente.

- **Agregação de rotas** — Anunciar várias sub-redes como um único prefixo, graças ao endereçamento hierárquico.

- **ICANN** — Entidade que aloca blocos de endereços (via 5 Registos Regionais) e gere a zona raiz do DNS.

## DHCP (→ 4.5)

- **DHCP (Dynamic Host Configuration Protocol)** — Protocolo que dá a um host, automaticamente e ao juntar-se à rede, o seu endereço IP e mais configuração (plug-and-play).

- **DHCP Discover / Offer / Request / ACK** — As 4 mensagens (em broadcast) da troca cliente↔servidor DHCP.

- **Lease DHCP** — Reserva temporária de um endereço IP; pode ser renovada enquanto o host continua na rede.

- **Configuração devolvida por DHCP** — Além do IP, pode incluir máscara de sub-rede, router/gateway de primeiro salto e endereço do servidor DNS.

- **Servidor DHCP no router** — Em muitas redes, o servidor DHCP está no próprio router que liga a sub-rede ao resto da Internet.

## NAT (→ 4.6)

- **Endereço privado/local** — Endereço de um espaço reservado (10/8, 172.16/12, 192.168/16) válido só na rede local.

- **Endereço público** — Endereço globalmente único, visível na Internet.

- **NAT (Network Address Translation)** — Mecanismo que permite a toda uma rede local partilhar um único IP público, traduzindo (IP, porto).

- **Tradução com portos** — O NAT troca o IP/porto de origem interno por IP público/novo porto, permitindo distinguir várias ligações internas.

- **Tabela NAT** — Tabela do router NAT que guarda as traduções (IP origem, porto) ↔ (IP NAT, novo porto).

- **NAT e argumento ponta-a-ponta** — Crítica ao NAT: um equipamento da rede altera informação de transporte, dificultando comunicação direta entre hosts.

- **NAT traversal** — Problema/técnicas para alcançar um servidor que está atrás de um NAT.

## IPv6 (→ 4.7)

- **IPv6** — Protocolo de rede com endereços de 128 bits, cabeçalho fixo de 40 bytes, sem checksum e sem fragmentação na rede.

- **Motivação do IPv6** — Aumentar drasticamente o espaço de endereços e simplificar/modernizar o tratamento dos datagramas.

- **Priority / Traffic class** — Campo IPv6 usado para distinguir prioridades/classes de tráfego.

- **Flow label** — Campo IPv6 que identifica datagramas de um mesmo fluxo.

- **Comprimento do payload IPv6** — Campo que indica o tamanho dos dados transportados após o cabeçalho IPv6.

- **Next header** — Campo IPv6 que identifica o protocolo do nível superior ou o próximo cabeçalho de opções.

- **Hop limit** — Campo IPv6 equivalente ao TTL do IPv4.

- **Cabeçalhos de extensão IPv6** — Opções colocadas fora do cabeçalho fixo principal, encadeadas pelo campo Next header.

- **Registo DNS AAAA** — Registo DNS que mapeia um nome para um endereço IPv6 (em IPv4 usa-se A).

- **Tunelamento** — Transportar um datagrama IPv6 como payload de um datagrama IPv4 (pacote dentro de pacote) para atravessar troços só-IPv4.

## Algoritmos de roteamento (→ 4.8)

- **Grafo (N, E)** — Modelo da rede: N = routers, E = ligações; c(x,y) = custo da ligação direta.

- **Custo de ligação `c(x,y)`** — Valor associado à ligação direta entre x e y; pode representar saltos, largura de banda, atraso ou congestão.

- **Algoritmo global** — Algoritmo em que todos os nós conhecem a topologia completa e os custos; exemplo: link state.

- **Algoritmo descentralizado** — Algoritmo em que cada nó conhece apenas vizinhos/custos locais e aprende por troca de mensagens; exemplo: distance vector.

- **Roteamento estático / dinâmico** — Rotas que mudam lentamente/manual ou rotas atualizadas automaticamente em resposta a alterações.

- **Link state** — Algoritmo de roteamento global em que todos os nós conhecem a topologia completa.

- **Anúncio link state** — Mensagem em que um router difunde o estado/custo das suas ligações aos outros routers.

- **Dijkstra** — Algoritmo que calcula os caminhos de menor custo de uma origem a todos os nós (usado no link state/OSPF).

- **D(v) / p(v) / N'** — Notação de Dijkstra: estimativa de custo até v, predecessor de v, conjunto de nós já resolvidos.

- **Distance vector** — Algoritmo de roteamento descentralizado em que cada nó troca vetores de distâncias só com vizinhos.

- **Vetor de distâncias** — Lista de estimativas de custo de um nó até todos os destinos conhecidos.

- **Equação de Bellman-Ford** — `Dx(y) = min_v { c(x,v) + Dv(y) }`, base do distance vector.

- **Boas notícias / más notícias** — Em distance vector, reduções de custo propagam depressa; aumentos/falhas podem propagar devagar e causar contagem até ao infinito.

- **Contagem até ao infinito (count-to-infinity)** — Problema do distance vector em que as "más notícias" propagam devagar, com custos a subir em ciclo.

- **Black-holing** — Erro em distance vector em que um nó anuncia caminhos falsos e atrai/descarta tráfego, propagando-se pela rede.

## Roteamento na Internet (→ 4.9)

- **Sistema Autónomo (AS) / domínio** — Conjunto de routers sob a mesma administração que corre o mesmo protocolo intra-AS.

- **Rede de redes** — Ideia de que a Internet é formada por muitos ASes independentes ligados entre si.

- **Roteamento intra-AS (intra-domínio)** — Roteamento entre routers do mesmo AS, focado no desempenho.

- **Roteamento inter-AS (inter-domínio)** — Roteamento entre ASes, onde as políticas têm precedência.

- **Router de gateway** — Router na extremidade de um AS, com ligação a outro(s) AS(es); corre eBGP e iBGP.

- **Informação de atingibilidade** — Informação que diz que prefixos/sub-redes podem ser alcançados através de certo AS/caminho.

- **RIP** — Protocolo intra-AS distance vector clássico (vetores a cada 30 s).

- **EIGRP** — Protocolo intra-AS baseado em distance vector (ex-proprietário Cisco).

- **OSPF (Open Shortest Path First)** — Protocolo intra-AS link state (usa Dijkstra), aberto, com mensagens autenticadas e múltiplos caminhos de igual custo.

- **OSPF hierárquico (área / backbone)** — Organização do OSPF em dois níveis (áreas locais + espinha dorsal) para escalar.

- **BGP (Border Gateway Protocol)** — Protocolo de roteamento inter-AS de facto; a "cola" da Internet; path vector sobre TCP.

- **Sessão BGP** — Ligação TCP semi-permanente entre dois routers BGP que trocam anúncios de rotas.

- **eBGP / iBGP** — BGP entre ASes (externo) / dentro do AS (interno).

- **Path vector** — Tipo de protocolo (BGP) que anuncia caminhos completos (lista de ASes) até prefixos.

- **AS-PATH** — Atributo BGP com a lista de ASes por onde o anúncio passou.

- **NEXT-HOP** — Atributo BGP que indica o router por onde se chega ao AS do próximo salto.

- **Política BGP** — Regras administrativas que decidem que rotas aceitar, preferir ou anunciar; em inter-AS podem importar mais do que desempenho.

- **Mensagens BGP (OPEN / UPDATE / KEEPALIVE / NOTIFICATION)** — Abrir sessão / anunciar ou retirar caminho / manter ligação / reportar erro ou fechar.

- **Roteamento batata quente (hot-potato)** — Escolher o gateway de saída com menor custo intra-domínio, livrando-se do pacote o mais depressa possível.

- **Preferência local** — Atributo/decisão de política BGP, primeiro critério na seleção de rotas.

- **AS-PATH mais curto** — Critério BGP usado depois da preferência local: preferir a rota com menos ASes no caminho.

---

# Conceitos — Nível Ligação (Aula 5)

> Cada secção corresponde a um ficheiro de resumo (o `(→ x.y)` indica qual).

## Introdução e serviços (→ 5.1)

- **Nó** — Host ou router; extremo de uma ligação.

- **Ligação** — Canal de comunicação que liga dois nós adjacentes (com fios, sem fios, LAN).

- **Trama (frame)** — Unidade de dados do nível de ligação; encapsula um datagrama.

- **Adaptador de rede (NIC)** — Placa/chip que concretiza os níveis ligação e físico (combinação de hardware, software e firmware).

- **Framing** — Encapsular o datagrama numa trama, adicionando cabeçalho e rodapé.

- **Acesso à ligação / ao meio** — Coordenação de quem pode transmitir quando vários nós partilham o mesmo canal.

- **Endereçamento MAC (serviço)** — Uso de endereços de nível ligação no cabeçalho da trama para identificar origem e destino locais.

- **Deteção de erros** — Capacidade de o recetor detetar bits errados na trama (e descartá-la ou pedir retransmissão).

- **Correção de erros** — Capacidade de o recetor identificar e corrigir erros de bit sem retransmissão.

- **Controlo de fluxo** — Ajustar o ritmo entre os nós emissor e recetor adjacentes.

- **Entrega fiável (nível ligação)** — Garantir que a trama chega sem erros entre nós adjacentes; útil em ligações sem fios (muito ruidosas).

- **Half-duplex / full-duplex** — Ambos os nós transmitem mas não ao mesmo tempo (half) / transmitem em simultâneo (full).

- **Comunicação adaptador-adaptador** — No nível ligação, a comunicação efetiva é entre adaptadores/NICs de nós adjacentes.

## Acesso múltiplo (→ 5.2)

- **Ligação ponto-a-ponto** — Ligação dedicada entre um emissor e um recetor.

- **Difusão / broadcast (meio partilhado)** — Canal partilhado por vários nós.

- **Colisão** — Interferência quando dois ou mais nós transmitem ao mesmo tempo no meio partilhado; o sinal corrompe-se.

- **Protocolo de acesso múltiplo** — Algoritmo distribuído que determina quando cada nó pode transmitir no canal partilhado.

- **Divisão do canal** — Família de protocolos que reparte o canal de forma fixa, por exemplo no tempo ou frequência.

- **TDMA (divisão no tempo)** — Cada nó transmite numa slot de tempo fixa em cada ronda.

- **FDMA (divisão em frequência)** — Cada nó transmite numa banda de frequência fixa.

- **Acesso aleatório** — Família em que os nós transmitem quando têm dados e recuperam de colisões com retransmissões/backoff.

- **ALOHA / slotted ALOHA** — Protocolos de acesso aleatório iniciais (transmitir e recuperar de colisões).

- **CSMA (Carrier Sense Multiple Access)** — Escutar antes de transmitir; se o canal parece livre transmite, se ocupado espera.

- **CSMA/CD (Collision Detection)** — CSMA que deteta colisões durante a transmissão e aborta, reduzindo o desperdício; usado na Ethernet clássica.

- **Backoff** — Espera de um tempo aleatório após colisão antes de retransmitir (duplica a cada nova colisão).

- **Acesso à vez** — Família em que os nós transmitem por turnos, evitando colisões à custa de coordenação.

- **Polling** — Acesso à vez em que um nó mestre convida os escravos a transmitir (ex.: Bluetooth).

- **Passagem de testemunho (token passing)** — Acesso à vez em que um token circula e só transmite quem o detém.

## Endereçamento MAC e ARP (→ 5.3)

- **Endereço MAC** — Endereço de nível ligação de 48 bits (hex), gravado no adaptador, único na LAN, local e plano.

- **Endereço IP vs MAC** — IP é hierárquico e usado para roteamento entre redes; MAC é plano/local e usado para entregar tramas na LAN.

- **Portabilidade do MAC** — O MAC acompanha a interface quando ela muda de LAN; o IP normalmente muda com a sub-rede.

- **IEEE** — Entidade que administra a alocação dos endereços MAC.

- **Broadcast MAC** — Endereço `FF-FF-FF-FF-FF-FF`; trama destinada a todos os nós da LAN.

- **ARP (Address Resolution Protocol)** — Protocolo que descobre o MAC correspondente a um IP na mesma rede.

- **Tabela ARP** — Tabela `<IP; MAC; TTL>` mantida por cada nó IP (entradas expiram, ~20 min).

- **Pedido ARP** — Consulta em broadcast: "quem tem este IP?".

- **Resposta ARP** — Resposta direta/unicast com o MAC correspondente ao IP perguntado.

- **ARP plug-and-play** — As tabelas ARP são aprendidas automaticamente à medida que os nós comunicam.

- **Envio para outra rede** — O host envia a trama para o MAC do gateway/router, mas mantém no datagrama o IP do destino final.

- **MAC muda por salto** — Ao atravessar routers, os endereços MAC são recriados em cada ligação; os IPs origem/destino permanecem ponta-a-ponta.

## Ethernet (→ 5.4)

- **Ethernet** — Tecnologia dominante de LAN com fios (10 Mbps–400 Gbps).

- **Domínio de colisão** — Conjunto de nós que podem colidir entre si.

- **Topologia em barramento** — Ethernet antiga com meio partilhado; todos os nós pertencem ao mesmo domínio de colisão.

- **Topologia em estrela com switch** — Ethernet atual; cada host liga a um switch, reduzindo colisões e permitindo transmissões simultâneas.

- **Preâmbulo** — Campo inicial da trama Ethernet usado para sincronizar relógios.

- **MAC destino/origem na trama Ethernet** — Campos de 6 bytes que identificam o adaptador local de destino e o adaptador emissor.

- **Campo Tipo Ethernet** — Campo que indica o protocolo do nível superior no payload, normalmente IP.

- **Payload Ethernet** — Dados transportados na trama, normalmente um datagrama IP.

- **CRC (Cyclic Redundancy Check)** — Campo de deteção de erros da trama Ethernet; trama com erro é descartada.

- **Ethernet sem ligação** — Não há handshake prévio entre adaptadores antes de enviar tramas.

- **Ethernet não fiável** — O recetor não envia ACK/NAK; perdas por erro só são recuperadas por níveis superiores, como TCP.

- **Modelo de serviço Ethernet** — Sem ligação e não fiável (sem ACK/NAK); recuperação fica para níveis superiores (TCP).

## Switches (→ 5.5)

- **Switch** — Dispositivo de nível ligação que encaminha tramas pelo MAC de destino; transparente, plug-and-play, auto-didata.

- **Transparente** — Os hosts não precisam de saber que há switches no meio.

- **Transmissões simultâneas** — Um switch pode permitir várias comunicações ao mesmo tempo em portas diferentes.

- **Tabela de comutação** — Tabela `<MAC; interface; TTL>` que diz por que interface se chega a cada host.

- **Auto-aprendizagem** — O switch aprende a localização dos hosts associando o MAC de origem à interface de chegada.

- **Filtragem** — Descartar uma trama cujo destino está no mesmo segmento de onde chegou.

- **Flooding (inundação)** — Encaminhar para todas as interfaces exceto a de chegada, quando o destino é desconhecido.

- **Store & forward** — Armazenar a trama/pacote inteiro antes de o reencaminhar (switches e routers).

- **Switch vs router** — Switch trabalha no nível ligação e usa MAC/tramas; router trabalha no nível rede e usa IP/datagramas.

## Redes sem fios / WiFi (→ 5.6)

- **Wireless** — Comunicação por ligação sem fios (o canal de rádio).

- **Mobilidade** — Gestão de um utilizador que muda o ponto de anexação à rede.

- **Wireless ≠ mobilidade** — Um dispositivo pode comunicar sem fios e estar fixo; mobilidade é mudar de ponto de anexação.

- **Handover** — Mudança de um dispositivo de um AP/rede para outro, idealmente sem cortar ligações.

- **Estação-base / Access Point (AP)** — Equipamento que liga os hosts sem fios à rede cablada (relay).

- **BSS (Basic Service Set)** — "Célula" 802.11 no modo infraestrutura: hosts sem fios + AP.

- **Modo infraestrutura / ad hoc** — Com AP / só hosts (sem AP).

- **IEEE 802.11** — Família de normas WiFi; usa CSMA/CA e suporta modo infraestrutura e ad hoc.

- **Canal WiFi** — Faixa de frequência escolhida pelo AP; canais sobrepostos podem causar interferência.

- **SSID** — Nome do AP, anunciado em beacon frames.

- **Beacon frame** — Trama difundida pelo AP com o seu SSID e MAC, usada na associação.

- **Problema do nó oculto** — Dois nós que não se "ouvem" (por distância/obstáculos) mas interferem ambos num terceiro.

- **CSMA/CA (Collision Avoidance)** — Acesso aleatório sem fios que evita colisões (DIFS + backoff) e usa ACK (após SIFS).

- **ACK 802.11** — Confirmação enviada pelo recetor quando a trama chega corretamente; é essencial porque o emissor não deteta colisões durante a transmissão.

- **DIFS / SIFS** — Intervalos de espera do 802.11; SIFS (curto) dá prioridade ao ACK.

- **RTS/CTS** — Pequenos pacotes de reserva do canal (Request To Send / Clear To Send) para reduzir colisões e mitigar o nó oculto.

- **Sequência RTS/CTS** — Reserva típica do canal: RTS → CTS → DATA → ACK.

- **Associação WiFi** — Processo em que o host escolhe um AP, usando beacons/SSID, e se liga a ele.

- **Autenticação/encriptação WiFi** — Processo de autenticar o cliente e cifrar a comunicação, tipicamente com WPA2/WPA3.

- **WPA2 / WPA3** — Protocolos de segurança WiFi; o WPA3 (2018) protege melhor contra ataques de adivinhação offline da password.

- **Mobilidade na mesma sub-rede** — Se o host muda de AP mas fica na mesma sub-rede, pode manter o IP; o switch reaprende o novo porto.

## VLANs (→ 5.7)

- **VLAN (Virtual Local Area Network)** — Várias LANs virtuais isoladas sobre uma única infraestrutura física de switch(es).

- **Motivação das VLANs** — Reduzir broadcast, melhorar isolamento/segurança e permitir organização lógica independente da posição física.

- **Broadcast de nível 2** — Tráfego como ARP/DHCP que, sem VLANs, pode atravessar toda a LAN comutada.

- **VLAN baseada em portos** — Portos do switch agrupados de modo a que um switch físico opere como vários switches virtuais.

- **Isolamento de tráfego** — Tramas de uma VLAN só atingem portos da mesma VLAN.

- **Encaminhamento entre VLANs** — Comunicação entre VLANs diferentes exige roteamento, como se fossem LANs separadas.

- **Porto trunk** — Porto que transporta tramas de várias VLANs entre switches físicos.

- **802.1Q** — Protocolo que adiciona uma tag (VLAN ID 12 bits + prioridade 3 bits) às tramas em portos trunk.

- **Tag VLAN** — Campo inserido na trama Ethernet para indicar a VLAN a que a trama pertence; inclui identificador 802.1Q e informação de controlo.

- **CRC recalculado em 802.1Q** — Como a trama muda ao receber a tag, o CRC tem de ser recalculado.

- **EVPN / VXLAN** — Esquema de tunneling que transporta tramas Ethernet (nível 2) dentro de datagramas IP (nível 3) para ligar redes L2 distantes.
