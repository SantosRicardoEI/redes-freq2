# Temas para estudar — Frequência de Redes

> Fontes: Aula 4 — Nível Rede + Aula 5 — Nível Ligação

---

## Aula 4 — Nível Rede

> **Resumos por tópico (Aula 4 — todos feitos ✅).** Para cada tópico abaixo, o
> resumo correspondente está em:
> - `4.1_camada_rede.md` — Introdução (funções, encaminhamento vs roteamento, planos, best effort)
> - `4.2_dentro_de_um_router.md` — Dentro de um router (portos, comutação, filas, LPM)
> - `4.3_datagrama_ip.md` — Datagrama IPv4 e fragmentação
> - `4.4_enderecamento_ipv4.md` — Endereçamento IPv4, sub-redes, máscaras, CIDR
> - `4.5_dhcp.md` — DHCP
> - `4.6_nat.md` — NAT
> - `4.7_ipv6.md` — IPv6 e tunelamento
> - `4.8_algoritmos_roteamento.md` — Link State/Dijkstra e Distance Vector/Bellman-Ford
> - `4.9_roteamento_internet.md` — AS, OSPF, BGP
> - `conceitos.md` — definições de todos os conceitos a negrito

### 1. Funções do nível de rede

- [ ] Saber o papel do nível de rede na Internet
- [ ] Distinguir **encaminhamento** de **roteamento**
  - [ ] Encaminhamento: mover pacotes dentro do router
  - [ ] Roteamento: calcular o caminho origem-destino
- [ ] Perceber a diferença entre:
  - [ ] Plano dos dados
  - [ ] Plano de controlo
- [ ] Saber o que é o modelo **best effort** da Internet
- [ ] Saber que garantias o IP **não dá**
  - [ ] Não garante entrega
  - [ ] Não garante ordem
  - [ ] Não garante atraso mínimo
  - [ ] Não garante largura de banda

---

### 2. Routers

- [ ] Saber a arquitetura geral de um router
- [ ] Identificar os principais componentes:
  - [ ] Portos de entrada
  - [ ] Portos de saída
  - [ ] Tecido de comutação
  - [ ] Processador de roteamento
- [ ] Saber como funciona o encaminhamento baseado no destino
- [ ] Saber consultar uma tabela de encaminhamento
- [ ] Saber aplicar **longest prefix matching**
- [ ] Perceber filas nos routers:
  - [ ] Fila nos portos de entrada
  - [ ] Fila nos portos de saída
  - [ ] Atrasos
  - [ ] Perdas por overflow do buffer
  - [ ] Head-of-the-Line Blocking
- [ ] Saber a ideia de escalonamento nos portos de saída

---

### 3. IP — Internet Protocol

- [ ] Saber o papel do protocolo IP
- [ ] Saber que o IP trabalha com **datagramas**
- [ ] Saber a estrutura geral de um datagrama IPv4
- [ ] Identificar campos importantes do cabeçalho IPv4:
  - [ ] Endereço IP de origem
  - [ ] Endereço IP de destino
  - [ ] TTL
  - [ ] Protocolo do nível superior
  - [ ] Comprimento do datagrama
  - [ ] Checksum
  - [ ] Campos de fragmentação
- [ ] Saber o que é MTU
- [ ] Perceber fragmentação e reconstituição:
  - [ ] Quando acontece
  - [ ] Porque acontece
  - [ ] Que a reconstituição ocorre apenas no destino
  - [ ] Como um datagrama grande pode originar vários fragmentos

---

### 4. Endereçamento IPv4

- [ ] Saber o que é um endereço IP
- [ ] Saber que o endereço IP identifica uma **interface**
- [ ] Saber que routers têm várias interfaces
- [ ] Saber que hosts normalmente têm uma ou poucas interfaces
- [ ] Perceber o conceito de **sub-rede**
- [ ] Saber identificar uma sub-rede
- [ ] Saber interpretar uma máscara de sub-rede
- [ ] Saber interpretar notação CIDR:
  - [ ] Exemplo: `a.b.c.d/x`
  - [ ] Saber o que significa o `/x`
- [ ] Saber distinguir:
  - [ ] Parte de rede/sub-rede
  - [ ] Parte de host
- [ ] Saber a ideia de endereçamento hierárquico
- [ ] Saber o que é agregação de rotas

---

### 5. DHCP

- [ ] Saber o que é DHCP
- [ ] Saber para que serve
- [ ] Saber que permite obter automaticamente:
  - [ ] Endereço IP
  - [ ] Máscara de rede
  - [ ] Router/gateway por defeito
  - [ ] Servidor DNS
- [ ] Saber as mensagens principais:
  - [ ] DHCP Discover
  - [ ] DHCP Offer
  - [ ] DHCP Request
  - [ ] DHCP ACK
- [ ] Saber que DHCP permite reutilização de endereços
- [ ] Saber que o endereço pode ser renovado

---

### 6. NAT — Network Address Translation

- [ ] Saber o que é NAT
- [ ] Saber porque é usado
- [ ] Saber que permite vários dispositivos usarem um único IP público
- [ ] Saber distinguir:
  - [ ] Endereço privado/local
  - [ ] Endereço público
- [ ] Saber que o router NAT mantém uma tabela NAT
- [ ] Saber que o NAT altera:
  - [ ] Endereço IP
  - [ ] Número de porto
- [ ] Saber vantagens do NAT:
  - [ ] Poupa endereços IPv4
  - [ ] Permite mudar endereços internos sem afectar o exterior
  - [ ] Dá alguma ocultação da rede interna
- [ ] Saber problemas/críticas ao NAT:
  - [ ] Viola o princípio ponta-a-ponta
  - [ ] Routers passam a mexer em informação do nível de transporte
  - [ ] Pode dificultar ligações a servidores atrás de NAT
  - [ ] NAT traversal

---

### 7. IPv6

- [ ] Saber porque surgiu o IPv6
- [ ] Saber que usa endereços de 128 bits
- [ ] Comparar IPv4 e IPv6
- [ ] Saber alterações principais no cabeçalho IPv6:
  - [ ] Cabeçalho mais simples
  - [ ] Sem fragmentação nos routers
  - [ ] Campo Next Header
  - [ ] Flow Label
  - [ ] Priority
- [ ] Saber que a fragmentação não é permitida nos routers IPv6
- [ ] Saber que DNS usa registos AAAA para IPv6
- [ ] Saber o problema da transição IPv4 → IPv6
- [ ] Saber o conceito de tunelamento:
  - [ ] Datagramas IPv6 transportados dentro de datagramas IPv4

---

### 8. Algoritmos de roteamento

- [ ] Saber o objectivo de um algoritmo de roteamento
- [ ] Saber distinguir:
  - [ ] Link State
  - [ ] Distance Vector
- [ ] Saber classificar algoritmos:
  - [ ] Globais vs descentralizados
  - [ ] Estáticos vs dinâmicos

---

### 9. Link State

- [ ] Saber a ideia dos algoritmos Link State
- [ ] Saber que cada router conhece a topologia completa
- [ ] Saber que os routers anunciam o estado das suas ligações
- [ ] Saber o algoritmo de Dijkstra
- [ ] Saber aplicar Dijkstra em exemplos simples
- [ ] Saber construir tabela de encaminhamento a partir do caminho mais curto
- [ ] Saber vantagens e problemas do Link State:
  - [ ] Boa visão global
  - [ ] Maior necessidade de memória/processamento
  - [ ] Difusão de informação pela rede

---

### 10. Distance Vector

- [ ] Saber a ideia dos algoritmos Distance Vector
- [ ] Saber que cada router troca informação apenas com vizinhos
- [ ] Saber a equação de Bellman-Ford:
  - [ ] `Dx(y) = minv { c(x,v) + Dv(y) }`
- [ ] Saber actualizar uma tabela Distance Vector
- [ ] Saber o que acontece quando mudam custos das ligações
- [ ] Saber a ideia:
  - [ ] Boas notícias propagam rapidamente
  - [ ] Más notícias propagam devagar
- [ ] Saber o problema de loops de roteamento
- [ ] Saber a comparação Link State vs Distance Vector

---

### 11. Roteamento na Internet

- [ ] Saber porque o roteamento na Internet tem de ser escalável
- [ ] Saber o conceito de Sistema Autónomo — AS
- [ ] Saber distinguir:
  - [ ] Roteamento intra-AS / intra-domínio
  - [ ] Roteamento inter-AS / inter-domínio
- [ ] Saber o papel dos routers gateway
- [ ] Saber que dentro de um AS se usam protocolos intra-domínio
- [ ] Saber que entre ASes se usa BGP

---

### 12. OSPF

- [ ] Saber que OSPF significa Open Shortest Path First
- [ ] Saber que é protocolo intra-AS
- [ ] Saber que é baseado em Link State
- [ ] Saber que usa o algoritmo de Dijkstra
- [ ] Saber que suporta autenticação de mensagens
- [ ] Saber a ideia de OSPF hierárquico

---

### 13. BGP

- [ ] Saber que BGP significa Border Gateway Protocol
- [ ] Saber que é protocolo inter-AS
- [ ] Saber que é a “cola” que liga a Internet
- [ ] Saber distinguir:
  - [ ] eBGP
  - [ ] iBGP
- [ ] Saber que BGP é um protocolo path vector
- [ ] Saber que anúncios BGP incluem:
  - [ ] Prefixo
  - [ ] Atributos
- [ ] Saber atributos importantes:
  - [ ] AS-PATH
  - [ ] NEXT-HOP
- [ ] Saber que BGP usa TCP
- [ ] Saber mensagens BGP:
  - [ ] OPEN
  - [ ] UPDATE
  - [ ] KEEPALIVE
  - [ ] NOTIFICATION
- [ ] Saber critérios de selecção de rotas BGP:
  - [ ] Preferência local
  - [ ] AS-PATH mais curto
  - [ ] NEXT-HOP mais próximo / hot potato routing
- [ ] Saber que em BGP as políticas podem ser mais importantes do que o desempenho
- [ ] Saber a diferença entre roteamento intra-AS e inter-AS:
  - [ ] Intra-AS foca mais desempenho
  - [ ] Inter-AS foca mais política e controlo administrativo

---

## Aula 5 — Nível Ligação

> **Resumos por tópico (Aula 5 — todos feitos ✅).** Para cada tópico abaixo, o
> resumo correspondente está em:
> - `5.1_introducao_servicos.md` — Introdução e serviços (trama, MAC, deteção de erros, adaptador)
> - `5.2_acesso_multiplo.md` — Protocolos de acesso múltiplo (TDMA/FDMA, CSMA/CD, polling/token)
> - `5.3_enderecamento_arp.md` — Endereços MAC, ARP, envio para outra rede
> - `5.4_ethernet.md` — Ethernet (trama, CSMA/CD, modelo de serviço)
> - `5.5_switches.md` — Switches, auto-aprendizagem, switches vs routers
> - `5.6_wifi.md` — Redes sem fios, 802.11, nó oculto, CSMA/CA, RTS/CTS, WPA3
> - `5.7_vlans.md` — VLANs, porto trunk, 802.1Q, EVPN/VXLAN
> - `conceitos.md` — definições de todos os conceitos a negrito

### 1. Introdução ao nível ligação

- [ ] Saber o papel do nível ligação
- [ ] Saber que liga nós adjacentes
- [ ] Saber que a unidade de dados é a **trama**
- [ ] Saber que a trama encapsula um datagrama
- [ ] Saber exemplos de protocolos/tecnologias:
  - [ ] Ethernet
  - [ ] WiFi / 802.11
  - [ ] PPP

---

### 2. Serviços do nível ligação

- [ ] Saber os principais serviços:
  - [ ] Framing
  - [ ] Acesso ao meio
  - [ ] Endereçamento MAC
  - [ ] Detecção de erros
  - [ ] Correcção de erros
  - [ ] Transmissão fiável, quando aplicável
- [ ] Saber que endereços MAC são diferentes de endereços IP
- [ ] Saber porque há controlo de erros no nível ligação
- [ ] Saber que ligações wireless têm mais erros do que ligações por cabo/fibra
- [ ] Saber onde é implementado o nível ligação:
  - [ ] Placa de rede
  - [ ] Adaptador Ethernet
  - [ ] Adaptador WiFi
  - [ ] Chip de rede

---

### 3. Comunicação entre adaptadores

- [ ] Saber que o emissor:
  - [ ] Encapsula datagrama numa trama
  - [ ] Junta bits de detecção/correcção de erros
  - [ ] Transmite a trama
- [ ] Saber que o receptor:
  - [ ] Recebe a trama
  - [ ] Verifica erros
  - [ ] Extrai o datagrama
  - [ ] Entrega ao nível de rede

---

### 4. Ligações de acesso múltiplo

- [ ] Saber distinguir:
  - [ ] Ligação ponto-a-ponto
  - [ ] Ligação broadcast / meio partilhado
- [ ] Saber exemplos de meio partilhado:
  - [ ] Ethernet antiga com cabo partilhado
  - [ ] WiFi
- [ ] Saber o problema principal:
  - [ ] Vários nós podem tentar transmitir ao mesmo tempo
  - [ ] Podem ocorrer colisões

---

### 5. Protocolos de acesso múltiplo

- [ ] Saber o que é um protocolo de acesso múltiplo
- [ ] Saber o que seria um protocolo ideal
- [ ] Saber a taxonomia:
  - [ ] Divisão do canal
  - [ ] Acesso aleatório
  - [ ] Acesso à vez

---

### 6. Protocolos por divisão do canal

- [ ] Saber a ideia geral:
  - [ ] Dividir o canal em partes
  - [ ] Atribuir uma parte a cada nó
- [ ] Saber TDMA:
  - [ ] Divisão por tempo
  - [ ] Cada nó transmite no seu slot
- [ ] Saber FDMA:
  - [ ] Divisão por frequência
  - [ ] Cada nó usa uma banda de frequência
- [ ] Saber vantagens:
  - [ ] Bom em carga elevada
  - [ ] Justo
- [ ] Saber desvantagens:
  - [ ] Ineficiente quando há poucos nós activos

---

### 7. Protocolos de acesso aleatório

- [ ] Saber que colisões são permitidas
- [ ] Saber que é necessário recuperar de colisões
- [ ] Saber exemplos:
  - [ ] ALOHA
  - [ ] Slotted ALOHA
  - [ ] CSMA
  - [ ] CSMA/CD
  - [ ] CSMA/CA
- [ ] Saber CSMA:
  - [ ] Escutar antes de transmitir
  - [ ] Se o canal está livre, transmite
  - [ ] Se o canal está ocupado, espera
- [ ] Saber CSMA/CD:
  - [ ] Carrier Sense Multiple Access with Collision Detection
  - [ ] Usado em Ethernet clássica
  - [ ] Detecta colisões
  - [ ] Pára transmissão quando detecta colisão
- [ ] Saber porque colisões ainda podem acontecer em CSMA:
  - [ ] Atraso de propagação
  - [ ] Distância entre nós
- [ ] Saber que CSMA/CD é difícil em redes sem fios

---

### 8. Protocolos de acesso à vez

- [ ] Saber a ideia geral:
  - [ ] Os nós transmitem por turnos
- [ ] Saber polling:
  - [ ] Um nó mestre dá permissão para transmitir
  - [ ] Problema: overhead e ponto único de falha
- [ ] Saber token passing:
  - [ ] Um token circula entre os nós
  - [ ] Só transmite quem tem o token
  - [ ] Problema: overhead e falha do token

---

### 9. Endereços MAC

- [ ] Saber o que é um endereço MAC
- [ ] Saber que é endereço de nível ligação
- [ ] Saber que normalmente tem 48 bits
- [ ] Saber que é escrito na placa/adaptador de rede
- [ ] Saber que identifica uma interface na LAN
- [ ] Saber diferença entre:
  - [ ] Endereço IP: usado para encaminhamento no nível de rede
  - [ ] Endereço MAC: usado localmente numa LAN
- [ ] Saber que a alocação de endereços MAC é administrada pelo IEEE
- [ ] Saber a analogia:
  - [ ] MAC = número de identificação
  - [ ] IP = morada postal

---

### 10. ARP — Address Resolution Protocol

- [ ] Saber para que serve o ARP
- [ ] Saber que faz mapeamento:
  - [ ] IP → MAC
- [ ] Saber que cada nó tem uma tabela ARP
- [ ] Saber o funcionamento na mesma rede:
  - [ ] Nó A quer enviar para IP de B
  - [ ] A não sabe o MAC de B
  - [ ] A envia ARP Request em broadcast
  - [ ] B responde com ARP Reply
  - [ ] A guarda a entrada na tabela ARP
- [ ] Saber que o endereço MAC de broadcast é:
  - [ ] `FF-FF-FF-FF-FF-FF`
- [ ] Saber que ARP é plug-and-play
- [ ] Saber que entradas ARP expiram com o tempo

---

### 11. Envio para outra rede

- [ ] Saber o processo quando origem e destino estão em redes diferentes
- [ ] Saber que o host envia a trama para o MAC do router/gateway
- [ ] Saber que o IP de destino continua a ser o IP final
- [ ] Saber que os endereços MAC mudam salto a salto
- [ ] Saber que os endereços IP origem/destino se mantêm iguais ao longo do percurso
- [ ] Saber distinguir:
  - [ ] Encapsulamento no nível ligação
  - [ ] Encaminhamento no nível rede

---

### 12. Ethernet

- [ ] Saber que Ethernet é a tecnologia dominante em LANs com fios
- [ ] Saber a topologia Ethernet moderna:
  - [ ] Hosts ligados a switches
  - [ ] Ligações dedicadas
- [ ] Saber a estrutura de uma trama Ethernet:
  - [ ] Endereço MAC destino
  - [ ] Endereço MAC origem
  - [ ] Tipo
  - [ ] Dados/payload
  - [ ] CRC
- [ ] Saber que o campo Tipo indica o protocolo do nível superior
- [ ] Saber que CRC serve para detecção de erros
- [ ] Saber que tramas com erro são descartadas
- [ ] Saber o modelo de serviço Ethernet:
  - [ ] Sem ligação
  - [ ] Não fiável
  - [ ] Sem ACK/NAK
- [ ] Saber que a recuperação de perdas fica para níveis superiores, como TCP
- [ ] Saber que Ethernet clássica usa CSMA/CD

---

### 13. Switches Ethernet

- [ ] Saber que switches são dispositivos de nível ligação
- [ ] Saber que examinam endereços MAC
- [ ] Saber que encaminham tramas selectivamente
- [ ] Saber que armazenam e encaminham tramas
- [ ] Saber que hosts não precisam de saber que há switches
- [ ] Saber que switches são plug-and-play
- [ ] Saber que permitem transmissões simultâneas
- [ ] Saber que cada ligação pode ser um domínio de colisão separado
- [ ] Saber que switches têm buffers
- [ ] Saber que switches mantêm uma tabela de comutação:
  - [ ] MAC address
  - [ ] Interface
  - [ ] Tempo/validade da entrada
- [ ] Saber como o switch aprende:
  - [ ] Observa o MAC de origem das tramas recebidas
  - [ ] Associa MAC à interface de entrada
- [ ] Saber filtragem e encaminhamento:
  - [ ] Se destino está na mesma interface, descarta
  - [ ] Se conhece destino, envia pela interface correcta
  - [ ] Se não conhece destino, faz flooding

---

### 14. Switches vs Routers

- [ ] Saber diferenças principais:
  - [ ] Router trabalha no nível rede
  - [ ] Switch trabalha no nível ligação
- [ ] Saber que routers analisam endereços IP
- [ ] Saber que switches analisam endereços MAC
- [ ] Saber que routers usam tabelas calculadas por algoritmos/protocolos de roteamento
- [ ] Saber que switches aprendem tabelas automaticamente
- [ ] Saber que routers ligam redes diferentes
- [ ] Saber que switches ligam dispositivos dentro da mesma LAN

---

### 15. Redes sem fios / WiFi

- [ ] Saber o contexto das redes sem fios
- [ ] Saber distinguir:
  - [ ] Wireless
  - [ ] Mobilidade
- [ ] Saber elementos de uma rede sem fios:
  - [ ] Hosts sem fios
  - [ ] Ligações sem fios
  - [ ] Estação-base / Access Point
  - [ ] Rede cablada
- [ ] Saber que WiFi é IEEE 802.11
- [ ] Saber que WiFi usa CSMA/CA
- [ ] Saber que WiFi suporta:
  - [ ] Modo infraestrutura
  - [ ] Modo ad hoc
- [ ] Saber a arquitectura LAN 802.11
- [ ] Saber que o espectro é dividido em canais
- [ ] Saber que pode haver interferência entre APs no mesmo canal

---

### 16. Problema do nó oculto

- [ ] Saber o que é o problema do nó oculto
- [ ] Saber que acontece por:
  - [ ] Distância
  - [ ] Obstáculos
- [ ] Saber que dois nós podem não se detectar, mas ambos interferem no receptor
- [ ] Saber porque isto complica o CSMA em redes sem fios

---

### 17. CSMA/CA em WiFi

- [ ] Saber que CSMA/CA significa Collision Avoidance
- [ ] Saber que tenta evitar colisões em vez de as detectar
- [ ] Saber o funcionamento geral:
  - [ ] Se o canal está livre durante DIFS, transmite
  - [ ] Se o canal está ocupado, espera
  - [ ] Usa temporizador de backoff
  - [ ] Temporizador decresce enquanto o canal está livre
- [ ] Saber que pode usar RTS/CTS
- [ ] Saber para que servem RTS/CTS:
  - [ ] Reservar o canal
  - [ ] Reduzir colisões
  - [ ] Mitigar o problema do nó oculto
- [ ] Saber a sequência básica:
  - [ ] RTS
  - [ ] CTS
  - [ ] DATA
  - [ ] ACK

---

### 18. Associação, autenticação e encriptação WiFi

- [ ] Saber que um dispositivo WiFi precisa de:
  - [ ] Descobrir redes/APs
  - [ ] Associar-se ao AP
  - [ ] Autenticar-se
  - [ ] Obter IP, normalmente por DHCP
- [ ] Saber noções básicas de segurança WiFi:
  - [ ] Autenticação
  - [ ] Derivação de chaves
  - [ ] Comunicação cifrada
- [ ] Saber que WPA3 é mais recente do que WPA2
- [ ] Saber que WPA3 protege melhor contra ataques de dicionário offline

---

### 19. VLANs

- [ ] Saber o que é uma VLAN
- [ ] Saber que VLAN significa Virtual Local Area Network
- [ ] Saber a motivação:
  - [ ] Escalabilidade
  - [ ] Separação lógica de redes
  - [ ] Redução de broadcast
  - [ ] Segurança/isolamento
  - [ ] Flexibilidade organizacional
- [ ] Saber que VLANs podem ser baseadas em portos
- [ ] Saber que portas de um switch podem pertencer a VLANs diferentes
- [ ] Saber que dispositivos em VLANs diferentes ficam logicamente separados
- [ ] Saber que para comunicação entre VLANs é necessário roteamento
- [ ] Saber o que é um porto trunk
- [ ] Saber que trunks transportam tráfego de várias VLANs
- [ ] Saber que 802.1Q adiciona informação de tagging às tramas
- [ ] Saber a ideia de EVPN/VXLAN:
  - [ ] Tramas Ethernet transportadas dentro de datagramas IP
  - [ ] Extensão lógica de redes de nível 2

---

## Tópicos que saem com maior probabilidade

### Muito provável

- [ ] Diferença entre encaminhamento e roteamento
- [ ] Plano dos dados vs plano de controlo
- [ ] Modelo best effort
- [ ] Estrutura de router
- [ ] Longest prefix matching
- [ ] Datagrama IPv4
- [ ] Fragmentação IP
- [ ] Sub-redes e CIDR
- [ ] DHCP
- [ ] NAT
- [ ] IPv6 e tunelamento
- [ ] Link State / Dijkstra
- [ ] Distance Vector / Bellman-Ford
- [ ] OSPF
- [ ] BGP
- [ ] Serviços do nível ligação
- [ ] Protocolos de acesso múltiplo
- [ ] CSMA/CD
- [ ] CSMA/CA
- [ ] MAC vs IP
- [ ] ARP
- [ ] Ethernet
- [ ] Switches
- [ ] Switches vs routers
- [ ] WiFi / 802.11
- [ ] VLANs

---

## Perguntas que deves saber responder

### Aula 4

- [ ] O que faz o nível de rede?
- [ ] Qual é a diferença entre encaminhamento e roteamento?
- [ ] O que é o modelo best effort?
- [ ] Como funciona uma tabela de encaminhamento?
- [ ] O que é longest prefix matching?
- [ ] O que é fragmentação IP?
- [ ] O que é uma sub-rede?
- [ ] Como funciona CIDR?
- [ ] Como funciona DHCP?
- [ ] O que é NAT e porque é usado?
- [ ] Quais são as vantagens e desvantagens do NAT?
- [ ] Porque surgiu IPv6?
- [ ] Como funciona o tunelamento IPv6 sobre IPv4?
- [ ] Como funciona Dijkstra?
- [ ] Como funciona Distance Vector?
- [ ] Qual a diferença entre Link State e Distance Vector?
- [ ] O que é um AS?
- [ ] Qual a diferença entre intra-AS e inter-AS?
- [ ] O que é OSPF?
- [ ] O que é BGP?
- [ ] O que são AS-PATH e NEXT-HOP?

### Aula 5

- [ ] O que faz o nível ligação?
- [ ] O que é uma trama?
- [ ] Que serviços são prestados pelo nível ligação?
- [ ] O que é um protocolo de acesso múltiplo?
- [ ] Qual a diferença entre TDMA, FDMA, CSMA, CSMA/CD e CSMA/CA?
- [ ] Porque há colisões?
- [ ] Porque CSMA/CD é usado em redes com fio e CSMA/CA em WiFi?
- [ ] O que é um endereço MAC?
- [ ] Qual a diferença entre endereço MAC e endereço IP?
- [ ] Como funciona ARP?
- [ ] O que acontece quando se envia um datagrama para outra rede?
- [ ] Qual é a estrutura de uma trama Ethernet?
- [ ] O que faz um switch?
- [ ] Como um switch aprende a sua tabela?
- [ ] Qual a diferença entre switch e router?
- [ ] O que é o problema do nó oculto?
- [ ] Como funciona RTS/CTS?
- [ ] O que é uma VLAN?
- [ ] Para que serve 802.1Q?
