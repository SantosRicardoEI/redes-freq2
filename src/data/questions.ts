import type { ChapterId } from "./chapters";

export type StudyQuestion = {
  id: string;
  chapterId: ChapterId;
  question: string;
  answer: string;
  tags?: string[];
};

export const questions: StudyQuestion[] = [
  {
    id: "q-4-1-001",
    chapterId: "4.1",
    question: "Qual é a função principal da camada de rede?",
    answer:
      "A camada de rede transporta datagramas IP desde o host emissor até ao host recetor, atravessando routers intermédios. Para isso usa endereços IP, datagramas, tabelas de encaminhamento e protocolos de roteamento.",
    tags: ["conceito", "camada-rede"]
  },
  {
    id: "q-4-1-002",
    chapterId: "4.1",
    question: "O que é um datagrama IP e que informação existe no seu cabeçalho?",
    answer:
      "Um datagrama IP é a unidade de dados da camada de rede. Tem cabeçalho e dados. O cabeçalho inclui informação como endereço IP de origem, endereço IP de destino, TTL, protocolo da camada superior e campos usados em fragmentação.",
    tags: ["conceito", "datagrama"]
  },
  {
    id: "q-4-1-003",
    chapterId: "4.1",
    question: "Distingue segmento, datagrama e trama.",
    answer:
      "Segmento é a unidade da camada de transporte, normalmente TCP ou UDP. Datagrama é a unidade da camada de rede, normalmente IP. Trama é a unidade da camada de ligação, que encapsula o datagrama para atravessar uma ligação física entre nós vizinhos.",
    tags: ["comparação", "encapsulamento"]
  },
  {
    id: "q-4-1-004",
    chapterId: "4.1",
    question: "Explica o encapsulamento desde uma aplicação até à ligação física.",
    answer:
      "A aplicação gera dados que a camada de transporte coloca num segmento. A camada de rede encapsula esse segmento num datagrama IP. A camada de ligação encapsula o datagrama numa trama para a ligação seguinte. No destino, o processo é feito no sentido inverso.",
    tags: ["conceito", "encapsulamento"]
  },
  {
    id: "q-4-1-005",
    chapterId: "4.1",
    question: "Qual é a diferença entre encaminhamento e roteamento?",
    answer:
      "Encaminhamento é uma ação local: um router recebe um datagrama numa porta de entrada, consulta a tabela e envia-o por uma porta de saída. Roteamento é o processo global que calcula os caminhos origem-destino e preenche as tabelas de encaminhamento.",
    tags: ["comparação", "encaminhamento", "roteamento"]
  },
  {
    id: "q-4-1-006",
    chapterId: "4.1",
    question: "O que pertence ao plano dos dados e o que pertence ao plano de controlo?",
    answer:
      "O plano dos dados executa o encaminhamento real dos datagramas, rapidamente, dentro dos routers. O plano de controlo calcula os caminhos, executa protocolos de roteamento e constrói ou atualiza as tabelas usadas pelo plano dos dados.",
    tags: ["comparação", "plano-dados", "plano-controlo"]
  },
  {
    id: "q-4-1-007",
    chapterId: "4.1",
    question: "O que significa dizer que a Internet usa modelo best effort?",
    answer:
      "Significa que a rede tenta entregar os datagramas, mas não promete garantias fortes. Pode haver perdas, atrasos variáveis, reordenação e ausência de largura de banda mínima garantida. A simplicidade deste modelo tornou a Internet escalável.",
    tags: ["conceito", "best-effort"]
  },
  {
    id: "q-4-1-008",
    chapterId: "4.1",
    question: "Que garantias o IP best effort não oferece?",
    answer:
      "Não garante entrega, ordem, atraso máximo, jitter baixo nem largura de banda mínima. A recuperação de perdas ou controlo mais sofisticado fica normalmente para camadas superiores, como TCP, ou para a própria aplicação.",
    tags: ["conceito", "best-effort"]
  },
  {
    id: "q-4-1-009",
    chapterId: "4.1",
    question: "Porque é que o best effort teve tanto sucesso apesar de não oferecer garantias fortes?",
    answer:
      "Porque simplifica a rede e os routers, reduz custos, facilita a interoperabilidade e escala muito bem. Muitas limitações são compensadas por TCP, CDNs, replicação, aplicações adaptativas e aumento de capacidade das redes.",
    tags: ["interpretação", "best-effort"]
  },
  {
    id: "q-4-1-010",
    chapterId: "4.1",
    question: "Compara ATM CBR, ATM ABR, IntServ e DiffServ com o best effort.",
    answer:
      "ATM CBR tenta garantir taxa constante, ordem e tempo. ATM ABR garante uma largura de banda mínima. IntServ tenta reservar recursos para garantias fortes. DiffServ dá tratamento por classes/prioridades. Best effort é mais simples: tenta entregar, mas não garante.",
    tags: ["comparação", "qos", "best-effort"]
  },
  {
    id: "q-4-2-001",
    chapterId: "4.2",
    question: "Quais são os principais componentes de um router?",
    answer:
      "Um router tem portos de entrada, tecido de comutação, portos de saída e processador de roteamento. Os portos tratam receção/transmissão, o tecido move datagramas internamente e o processador trata o plano de controlo.",
    tags: ["conceito", "router"]
  },
  {
    id: "q-4-2-002",
    chapterId: "4.2",
    question: "Que funções acontecem num porto de entrada?",
    answer:
      "O porto de entrada recebe bits ao nível físico, processa a trama ao nível de ligação, extrai o datagrama IP, lê campos do cabeçalho, consulta a tabela de encaminhamento e decide a porta de saída.",
    tags: ["conceito", "router", "porta-entrada"]
  },
  {
    id: "q-4-2-003",
    chapterId: "4.2",
    question: "O que é comutação descentralizada num router?",
    answer:
      "É fazer a procura e decisão de encaminhamento diretamente no porto de entrada, usando uma cópia local da tabela. O objetivo é evitar depender sempre do processador central e encaminhar à velocidade da linha.",
    tags: ["conceito", "router", "encaminhamento"]
  },
  {
    id: "q-4-2-004",
    chapterId: "4.2",
    question: "Qual é a diferença entre encaminhamento baseado no destino e encaminhamento generalizado?",
    answer:
      "No encaminhamento baseado no destino, a porta de saída é escolhida apenas pelo endereço IP de destino. No encaminhamento generalizado, a decisão pode usar vários campos do cabeçalho, como origem, destino, protocolo ou portas.",
    tags: ["comparação", "encaminhamento"]
  },
  {
    id: "q-4-2-005",
    chapterId: "4.2",
    question: "O que é longest prefix matching?",
    answer:
      "É a regra usada por um router quando várias entradas da tabela correspondem ao endereço de destino. O router escolhe a entrada com o prefixo mais longo, isto é, a rota mais específica.",
    tags: ["conceito", "router", "longest-prefix"]
  },
  {
    id: "q-4-2-006",
    chapterId: "4.2",
    question: "Prática: uma tabela tem 10.0.0.0/8, 10.1.0.0/16 e 10.1.2.0/24. Para 10.1.2.55, que entrada vence?",
    answer:
      "Vence 10.1.2.0/24, porque as três entradas correspondem ao destino, mas /24 é o prefixo mais longo e portanto mais específico.",
    tags: ["prática", "router", "longest-prefix"]
  },
  {
    id: "q-4-2-007",
    chapterId: "4.2",
    question: "O que é o tecido de comutação e qual seria uma taxa ideal?",
    answer:
      "O tecido de comutação transfere datagramas dos portos de entrada para os portos de saída. Com N portas de entrada de taxa R, o ideal é o tecido conseguir uma taxa próxima de N x R para não criar gargalos internos.",
    tags: ["conceito", "router", "tecido-comutação"]
  },
  {
    id: "q-4-2-008",
    chapterId: "4.2",
    question: "Porque se formam filas nos portos de entrada e de saída?",
    answer:
      "Há fila de entrada quando os datagramas chegam mais depressa do que conseguem passar pelo tecido de comutação. Há fila de saída quando vários datagramas chegam à mesma saída mais depressa do que a ligação consegue transmitir.",
    tags: ["conceito", "filas", "router"]
  },
  {
    id: "q-4-2-009",
    chapterId: "4.2",
    question: "O que é Head-of-the-Line blocking?",
    answer:
      "É quando o primeiro datagrama de uma fila impede os datagramas atrás dele de avançarem, mesmo que esses datagramas pudessem seguir para outras saídas livres. Isto aumenta atraso e reduz eficiência.",
    tags: ["conceito", "filas", "hol-blocking"]
  },
  {
    id: "q-4-2-010",
    chapterId: "4.2",
    question: "Como buffers, política de eliminação e escalonamento se relacionam?",
    answer:
      "Buffers guardam datagramas em fila. Se o buffer enche, a política de eliminação decide que datagrama descartar. O escalonamento decide qual datagrama enviar a seguir, por exemplo FIFO ou por prioridade.",
    tags: ["conceito", "buffers", "escalonamento"]
  },
  {
    id: "q-4-3-001",
    chapterId: "4.3",
    question: "Quais são as três peças principais da camada de rede da Internet?",
    answer:
      "São o protocolo IP, que define formato e endereçamento dos datagramas; o ICMP, usado para erros e sinalização; e os algoritmos/protocolos de roteamento, como OSPF e BGP, que preenchem tabelas de encaminhamento.",
    tags: ["conceito", "ip", "icmp"]
  },
  {
    id: "q-4-3-002",
    chapterId: "4.3",
    question: "Para que serve o campo TTL no IPv4?",
    answer:
      "O TTL limita o número de saltos que um datagrama pode fazer. Cada router decrementa o TTL; se chegar a 0, o datagrama é descartado. Isto evita datagramas a circular indefinidamente.",
    tags: ["conceito", "ipv4", "ttl"]
  },
  {
    id: "q-4-3-003",
    chapterId: "4.3",
    question: "Qual é a função do campo protocolo do nível superior no cabeçalho IPv4?",
    answer:
      "Indica a que protocolo de transporte o payload deve ser entregue no destino, por exemplo TCP ou UDP. Este campo é usado pelo host final, não pelos routers intermédios para entregar ao processo.",
    tags: ["conceito", "ipv4"]
  },
  {
    id: "q-4-3-004",
    chapterId: "4.3",
    question: "Que campos do IPv4 são importantes para fragmentação?",
    answer:
      "Identificador, flags e offset. O identificador agrupa fragmentos do mesmo datagrama original; as flags indicam se há mais fragmentos; o offset indica a posição dos dados do fragmento no datagrama original.",
    tags: ["conceito", "fragmentação", "ipv4"]
  },
  {
    id: "q-4-3-005",
    chapterId: "4.3",
    question: "O que é MTU e porque causa fragmentação?",
    answer:
      "MTU é o tamanho máximo que uma trama de uma ligação consegue transportar. Se um datagrama IP for maior do que a MTU da ligação de saída, tem de ser partido em fragmentos menores.",
    tags: ["conceito", "mtu", "fragmentação"]
  },
  {
    id: "q-4-3-006",
    chapterId: "4.3",
    question: "Onde ocorre a fragmentação e onde ocorre a reconstituição?",
    answer:
      "A fragmentação pode ocorrer na rede, num router cuja ligação de saída tem MTU menor. A reconstituição só ocorre no destino final, não nos routers intermédios.",
    tags: ["conceito", "fragmentação"]
  },
  {
    id: "q-4-3-007",
    chapterId: "4.3",
    question: "Prática: datagrama de 4000 bytes, cabeçalho de 20 bytes e MTU 1500. Qual é o payload máximo por fragmento?",
    answer:
      "Cada fragmento pode ter no máximo 1500 bytes totais. Como cada fragmento precisa de 20 bytes de cabeçalho IP, o payload máximo é 1500 - 20 = 1480 bytes.",
    tags: ["prática", "fragmentação", "mtu"]
  },
  {
    id: "q-4-3-008",
    chapterId: "4.3",
    question: "Prática: no exemplo de 4000 bytes e MTU 1500, quais são os offsets dos fragmentos?",
    answer:
      "O payload original é 3980 bytes. Os fragmentos levam 1480, 1480 e 1020 bytes de dados. Como o offset é medido em unidades de 8 bytes, os offsets são 0, 1480/8 = 185 e 2960/8 = 370.",
    tags: ["prática", "fragmentação", "offset"]
  },
  {
    id: "q-4-3-009",
    chapterId: "4.3",
    question: "Porque todos os fragmentos mantêm o mesmo identificador?",
    answer:
      "Porque o destino precisa de saber que aqueles fragmentos pertencem ao mesmo datagrama original. O identificador comum permite agrupar os fragmentos antes de os ordenar e reconstituir.",
    tags: ["conceito", "fragmentação"]
  },
  {
    id: "q-4-3-010",
    chapterId: "4.3",
    question: "Quanto overhead IP+TCP típico existe num segmento TCP sobre IPv4 sem opções?",
    answer:
      "Tipicamente há 20 bytes de cabeçalho IP e 20 bytes de cabeçalho TCP, totalizando 40 bytes de overhead, antes de contar overhead da aplicação ou da camada de ligação.",
    tags: ["conceito", "overhead", "ipv4"]
  },
  {
    id: "q-4-4-001",
    chapterId: "4.4",
    question: "O que identifica um endereço IP: um host ou uma interface?",
    answer:
      "Um endereço IP identifica uma interface. Um router normalmente tem várias interfaces e vários IPs. Um host pode ter mais do que uma interface, por exemplo Ethernet e WiFi.",
    tags: ["conceito", "endereçamento", "interface"]
  },
  {
    id: "q-4-4-002",
    chapterId: "4.4",
    question: "O que é uma sub-rede?",
    answer:
      "É um conjunto de interfaces com os mesmos bits de rede, que conseguem comunicar diretamente entre si sem passar por um router intermédio. A sub-rede é definida por um prefixo e uma máscara.",
    tags: ["conceito", "sub-rede"]
  },
  {
    id: "q-4-4-003",
    chapterId: "4.4",
    question: "Como se interpreta a notação CIDR a.b.c.d/x?",
    answer:
      "O /x indica quantos bits, a partir da esquerda, pertencem à parte de rede/sub-rede. Os restantes 32 - x bits pertencem à parte de host dentro dessa sub-rede.",
    tags: ["conceito", "cidr"]
  },
  {
    id: "q-4-4-004",
    chapterId: "4.4",
    question: "Como se calcula o número de hosts possíveis numa sub-rede /x?",
    answer:
      "Há 32 - x bits de host. O número de endereços é 2^(32-x), mas normalmente descontam-se o endereço de rede e o de broadcast. Portanto, hosts utilizáveis = 2^(32-x) - 2.",
    tags: ["prática", "cidr", "sub-rede"]
  },
  {
    id: "q-4-4-005",
    chapterId: "4.4",
    question: "Prática de revisão: para 8.6.4.2/18, quantos hosts existem na sub-rede?",
    answer:
      "Num /18 há 32 - 18 = 14 bits de host. Logo existem 2^14 - 2 = 16384 - 2 = 16382 hosts utilizáveis.",
    tags: ["prática", "revisão", "cidr"]
  },
  {
    id: "q-4-4-006",
    chapterId: "4.4",
    question: "Prática de revisão: para 8.6.4.2/18, quais são o endereço de rede e o broadcast?",
    answer:
      "O /18 fixa os dois primeiros octetos e os 2 primeiros bits do terceiro. O terceiro octeto 4 é 00000100, cujo prefixo de 2 bits é 00. Rede: 8.6.0.0. Broadcast: terceiro octeto 00111111 = 63 e quarto 255, logo 8.6.63.255.",
    tags: ["prática", "revisão", "cidr", "broadcast"]
  },
  {
    id: "q-4-4-007",
    chapterId: "4.4",
    question: "Qual é a diferença entre endereço de rede e endereço de broadcast?",
    answer:
      "O endereço de rede tem todos os bits de host a 0 e identifica a sub-rede. O endereço de broadcast tem todos os bits de host a 1 e representa envio para todos os hosts dessa sub-rede.",
    tags: ["comparação", "sub-rede", "broadcast"]
  },
  {
    id: "q-4-4-008",
    chapterId: "4.4",
    question: "Como um host normalmente obtém a parte host do seu endereço IP?",
    answer:
      "Normalmente obtém automaticamente por DHCP, embora também possa ser configurado manualmente. O DHCP pode entregar IP, máscara, gateway e DNS.",
    tags: ["conceito", "dhcp", "endereçamento"]
  },
  {
    id: "q-4-4-009",
    chapterId: "4.4",
    question: "Como uma organização/rede obtém a parte de rede do endereço IP?",
    answer:
      "A parte de rede é atribuída de forma hierárquica, tipicamente por ISP ou entidades de gestão de endereços. A ICANN coordena a alocação global através dos Registos Regionais.",
    tags: ["conceito", "icann", "endereçamento"]
  },
  {
    id: "q-4-4-010",
    chapterId: "4.4",
    question: "Porque o endereçamento hierárquico ajuda o roteamento?",
    answer:
      "Porque permite agregação de rotas: várias sub-redes podem ser anunciadas como um prefixo maior. Isto reduz o tamanho das tabelas e o volume de informação de roteamento.",
    tags: ["conceito", "agregação", "roteamento"]
  },
  {
    id: "q-4-5-001",
    chapterId: "4.5",
    question: "O que é DHCP e para que serve?",
    answer:
      "DHCP é o protocolo que permite a um host obter automaticamente configuração de rede ao entrar numa rede. Fornece pelo menos endereço IP e normalmente também máscara, gateway e DNS.",
    tags: ["conceito", "dhcp"]
  },
  {
    id: "q-4-5-002",
    chapterId: "4.5",
    question: "Porque se diz que DHCP é plug-and-play?",
    answer:
      "Porque o utilizador liga o host à rede e este consegue configurar-se automaticamente, sem definir manualmente endereço IP, máscara, router por defeito ou servidor DNS.",
    tags: ["conceito", "dhcp"]
  },
  {
    id: "q-4-5-003",
    chapterId: "4.5",
    question: "Quais são as quatro mensagens principais do DHCP, por ordem?",
    answer:
      "DHCP Discover, DHCP Offer, DHCP Request e DHCP ACK. Em resumo: o cliente procura servidor, o servidor oferece configuração, o cliente pede a oferta escolhida e o servidor confirma.",
    tags: ["conceito", "dhcp"]
  },
  {
    id: "q-4-5-004",
    chapterId: "4.5",
    question: "O que acontece na mensagem DHCP Discover?",
    answer:
      "O cliente ainda não sabe a sua configuração e difunde uma mensagem para descobrir servidores DHCP disponíveis. Como ainda não tem IP definitivo, usa broadcast.",
    tags: ["conceito", "dhcp", "broadcast"]
  },
  {
    id: "q-4-5-005",
    chapterId: "4.5",
    question: "Qual é a diferença entre DHCP Offer e DHCP ACK?",
    answer:
      "DHCP Offer é uma proposta de configuração enviada pelo servidor. DHCP ACK é a confirmação final de que o cliente pode usar a configuração pedida.",
    tags: ["comparação", "dhcp"]
  },
  {
    id: "q-4-5-006",
    chapterId: "4.5",
    question: "Que configuração além do endereço IP pode ser devolvida por DHCP?",
    answer:
      "Pode devolver máscara de sub-rede, router/gateway por defeito, servidor DNS e tempo de lease. Isto permite ao host comunicar dentro e fora da sub-rede.",
    tags: ["conceito", "dhcp"]
  },
  {
    id: "q-4-5-007",
    chapterId: "4.5",
    question: "O que é um lease DHCP?",
    answer:
      "É uma reserva temporária de um endereço IP para um cliente. O host pode renovar o lease enquanto continua na rede; quando o lease termina, o endereço pode ser reutilizado.",
    tags: ["conceito", "dhcp", "lease"]
  },
  {
    id: "q-4-5-008",
    chapterId: "4.5",
    question: "Porque DHCP ajuda a reutilizar endereços IP?",
    answer:
      "Porque os endereços não ficam permanentemente presos a hosts. Quando um dispositivo sai da rede ou o lease expira, o endereço pode voltar ao conjunto disponível para outro cliente.",
    tags: ["interpretação", "dhcp"]
  },
  {
    id: "q-4-5-009",
    chapterId: "4.5",
    question: "Onde costuma estar o servidor DHCP numa rede doméstica ou pequena?",
    answer:
      "Muitas vezes está no próprio router que liga a sub-rede à Internet. Esse router atua como gateway e também distribui configuração DHCP aos hosts da LAN.",
    tags: ["conceito", "dhcp", "router"]
  },
  {
    id: "q-4-5-010",
    chapterId: "4.5",
    question: "Prática: um host recebe IP e máscara por DHCP, mas não recebe gateway. Que problema pode ter?",
    answer:
      "Consegue comunicar com hosts da mesma sub-rede, mas pode não saber para onde enviar tráfego destinado a outras redes. Sem gateway por defeito, a comunicação para fora da LAN fica comprometida.",
    tags: ["prática", "dhcp", "gateway"]
  },
  {
    id: "q-4-6-001",
    chapterId: "4.6",
    question: "Qual é a principal função do NAT?",
    answer:
      "A função principal do NAT é traduzir endereços IP privados da rede local de/para um endereço IP público, normalmente usando também números de porto para distinguir ligações internas.",
    tags: ["conceito", "revisão", "nat"]
  },
  {
    id: "q-4-6-002",
    chapterId: "4.6",
    question: "Distingue endereço privado/local e endereço público.",
    answer:
      "Endereços privados, como 10/8, 172.16/12 e 192.168/16, só são válidos dentro da rede local. Endereços públicos são globalmente únicos e roteáveis na Internet.",
    tags: ["comparação", "nat", "endereçamento"]
  },
  {
    id: "q-4-6-003",
    chapterId: "4.6",
    question: "Como o NAT permite que vários hosts usem um único IP público?",
    answer:
      "O router NAT substitui o IP e porto de origem internos por um IP público e um novo porto. Guarda essa associação numa tabela NAT para conseguir traduzir as respostas de volta para o host interno correto.",
    tags: ["conceito", "nat", "portos"]
  },
  {
    id: "q-4-6-004",
    chapterId: "4.6",
    question: "O que guarda uma tabela NAT?",
    answer:
      "Guarda pares de tradução entre IP/porto interno e IP público/porto externo escolhido pelo NAT. Essa tabela permite mapear respostas recebidas da Internet para o host interno correto.",
    tags: ["conceito", "nat", "tabela"]
  },
  {
    id: "q-4-6-005",
    chapterId: "4.6",
    question: "Prática: 10.0.0.5:3345 sai por NAT como 138.76.29.7:5001. Como chega a resposta ao host interno?",
    answer:
      "A resposta chega ao NAT com destino 138.76.29.7:5001. O NAT consulta a tabela e substitui o destino por 10.0.0.5:3345, encaminhando depois o datagrama para o host interno.",
    tags: ["prática", "nat", "portos"]
  },
  {
    id: "q-4-6-006",
    chapterId: "4.6",
    question: "Indica três vantagens do NAT.",
    answer:
      "Poupa endereços IPv4 públicos, permite alterar endereços internos sem afetar o exterior e oculta parcialmente a estrutura interna da rede, já que hosts internos não ficam diretamente endereçáveis.",
    tags: ["conceito", "nat"]
  },
  {
    id: "q-4-6-007",
    chapterId: "4.6",
    question: "Porque o NAT é considerado controverso?",
    answer:
      "Porque viola o princípio ponta-a-ponta: um equipamento da camada de rede altera informação de transporte, como portas. Também dificulta ligações iniciadas do exterior para servidores atrás do NAT.",
    tags: ["interpretação", "nat"]
  },
  {
    id: "q-4-6-008",
    chapterId: "4.6",
    question: "O que é NAT traversal?",
    answer:
      "É o conjunto de técnicas para permitir comunicação com um host ou servidor que está atrás de NAT. O problema existe porque hosts internos não são diretamente alcançáveis pelo seu endereço privado a partir da Internet.",
    tags: ["conceito", "nat"]
  },
  {
    id: "q-4-6-009",
    chapterId: "4.6",
    question: "Porque o IPv6 reduz a necessidade de NAT?",
    answer:
      "Porque o IPv6 tem um espaço de endereçamento muito maior, permitindo que dispositivos tenham endereços globais únicos sem depender da partilha de um único IPv4 público.",
    tags: ["comparação", "nat", "ipv6"]
  },
  {
    id: "q-4-6-010",
    chapterId: "4.6",
    question: "Na pergunta de revisão, qual opção descreve melhor o NAT: converter IPv4 em IPv6 ou traduzir privados/públicos?",
    answer:
      "A correta é traduzir endereços IP privados de/para endereços IP públicos. NAT não é um mecanismo de conversão IPv4 para IPv6.",
    tags: ["revisão", "nat"]
  },
  {
    id: "q-4-7-001",
    chapterId: "4.7",
    question: "Qual foi a motivação inicial para o IPv6?",
    answer:
      "A motivação inicial foi o esgotamento do espaço de endereçamento IPv4 de 32 bits. O IPv6 usa 128 bits, oferecendo um espaço de endereços muitíssimo maior.",
    tags: ["conceito", "ipv6"]
  },
  {
    id: "q-4-7-002",
    chapterId: "4.7",
    question: "Quais são diferenças importantes entre o cabeçalho IPv4 e IPv6?",
    answer:
      "O IPv6 tem cabeçalho fixo de 40 bytes, endereços de 128 bits, não tem checksum no cabeçalho, não permite fragmentação por routers e usa Next Header para protocolo superior ou cabeçalhos de extensão.",
    tags: ["comparação", "ipv6", "ipv4"]
  },
  {
    id: "q-4-7-003",
    chapterId: "4.7",
    question: "Na revisão, que campo do IPv4 foi removido no IPv6 para melhorar o desempenho dos routers?",
    answer:
      "Foi removida a soma de controlo do cabeçalho, ou checksum. Removê-la evita recalcular checksum em cada salto, reduzindo processamento nos routers.",
    tags: ["revisão", "ipv6", "checksum"]
  },
  {
    id: "q-4-7-004",
    chapterId: "4.7",
    question: "O que é o campo Next Header no IPv6?",
    answer:
      "É o campo que indica o protocolo do nível superior, como TCP ou UDP, ou o próximo cabeçalho de extensão IPv6. Substitui a lógica de opções fixas dentro do cabeçalho principal.",
    tags: ["conceito", "ipv6"]
  },
  {
    id: "q-4-7-005",
    chapterId: "4.7",
    question: "O que é o Flow Label no IPv6?",
    answer:
      "É um campo usado para identificar datagramas que pertencem ao mesmo fluxo. A ideia é permitir tratamento especial ou consistente de pacotes relacionados, embora o conceito de fluxo seja flexível.",
    tags: ["conceito", "ipv6"]
  },
  {
    id: "q-4-7-006",
    chapterId: "4.7",
    question: "Como funciona a abreviação :: em endereços IPv6?",
    answer:
      "O símbolo :: substitui uma sequência de grupos de zeros. Só pode aparecer uma vez no endereço, porque se aparecesse duas vezes seria ambíguo saber quantos grupos de zeros cada :: representa.",
    tags: ["conceito", "ipv6", "endereçamento"]
  },
  {
    id: "q-4-7-007",
    chapterId: "4.7",
    question: "Na revisão, qual endereço não é válido: 2001::db8::7334, 2001:0:0:db8::7334, 2001::db8:0:0:0:7334 ou a forma completa?",
    answer:
      "O inválido é 2001::db8::7334, porque usa :: duas vezes. Os outros são válidos: usam :: no máximo uma vez ou escrevem todos os grupos explicitamente.",
    tags: ["prática", "revisão", "ipv6"]
  },
  {
    id: "q-4-7-008",
    chapterId: "4.7",
    question: "Que registo DNS é usado para mapear nomes para endereços IPv6?",
    answer:
      "Usa-se o registo AAAA. Para IPv4 usa-se o registo A; para IPv6, como o endereço é de 128 bits, usa-se AAAA.",
    tags: ["conceito", "ipv6", "dns"]
  },
  {
    id: "q-4-7-009",
    chapterId: "4.7",
    question: "O que significa dizer que não há fragmentação na rede em IPv6?",
    answer:
      "Significa que routers IPv6 não fragmentam datagramas durante o encaminhamento. Se for necessário lidar com tamanho máximo de pacote, isso deve ser tratado nas pontas, não pelos routers intermédios.",
    tags: ["conceito", "ipv6", "fragmentação"]
  },
  {
    id: "q-4-7-010",
    chapterId: "4.7",
    question: "O que é tunelamento IPv6 sobre IPv4?",
    answer:
      "É transportar um datagrama IPv6 dentro do payload de um datagrama IPv4 para atravessar uma parte da rede que ainda só suporta IPv4. É um pacote dentro de outro pacote.",
    tags: ["conceito", "ipv6", "tunelamento"]
  },
  {
    id: "q-4-8-001",
    chapterId: "4.8",
    question: "Como a rede é modelada nos algoritmos de roteamento?",
    answer:
      "É modelada como um grafo G = (N, E), em que N são routers/nós e E são ligações/arestas. Cada ligação tem um custo c(x,y), que pode representar saltos, largura de banda, atraso ou congestão.",
    tags: ["conceito", "roteamento", "grafo"]
  },
  {
    id: "q-4-8-002",
    chapterId: "4.8",
    question: "Distingue algoritmos globais e descentralizados.",
    answer:
      "Num algoritmo global, todos os routers conhecem a topologia completa e custos, como em Link State. Num descentralizado, cada router conhece apenas vizinhos e aprende por troca de informação local, como em Distance Vector.",
    tags: ["comparação", "roteamento"]
  },
  {
    id: "q-4-8-003",
    chapterId: "4.8",
    question: "Qual é a ideia central do Link State?",
    answer:
      "Cada router difunde o estado e custo das suas ligações para todos. Assim, todos conhecem a topologia completa e cada um corre Dijkstra localmente para calcular os caminhos de menor custo.",
    tags: ["conceito", "link-state", "dijkstra"]
  },
  {
    id: "q-4-8-004",
    chapterId: "4.8",
    question: "Em Dijkstra, o que representam D(v), p(v) e N'?",
    answer:
      "D(v) é a estimativa atual do custo até v; p(v) é o predecessor de v no caminho calculado; N' é o conjunto de nós cujo caminho de menor custo já é definitivamente conhecido.",
    tags: ["conceito", "dijkstra"]
  },
  {
    id: "q-4-8-005",
    chapterId: "4.8",
    question: "Prática: se de u para z há opções 2+5, 1+3 e 5+3, qual é o custo mínimo e por onde segue?",
    answer:
      "Os custos são 7, 4 e 8. O mínimo é 4, pela opção 1+3. No exemplo dos apontamentos, isso corresponde a seguir via x.",
    tags: ["prática", "dijkstra", "bellman-ford"]
  },
  {
    id: "q-4-8-006",
    chapterId: "4.8",
    question: "Qual é a equação de Bellman-Ford usada em Distance Vector?",
    answer:
      "Dx(y) = min_v { c(x,v) + Dv(y) }. O nó x escolhe, entre os seus vizinhos v, aquele que minimiza o custo da ligação até v mais o custo que v anuncia até y.",
    tags: ["conceito", "distance-vector", "bellman-ford"]
  },
  {
    id: "q-4-8-007",
    chapterId: "4.8",
    question: "Porque se diz que Distance Vector é iterativo, assíncrono e distribuído?",
    answer:
      "É iterativo porque os vetores vão sendo atualizados sucessivamente; assíncrono porque não exige que todos atualizem ao mesmo tempo; distribuído porque cada nó troca informação apenas com os seus vizinhos.",
    tags: ["conceito", "distance-vector"]
  },
  {
    id: "q-4-8-008",
    chapterId: "4.8",
    question: "O que significa 'boas notícias correm depressa, más notícias correm devagar' em Distance Vector?",
    answer:
      "Quando uma rota fica melhor, a melhoria tende a propagar rapidamente. Quando uma ligação falha ou fica mais cara, os nós podem continuar a acreditar em caminhos antigos e aumentar custos gradualmente, causando count-to-infinity.",
    tags: ["conceito", "distance-vector", "count-to-infinity"]
  },
  {
    id: "q-4-8-009",
    chapterId: "4.8",
    question: "Prática de revisão: se o custo P-R passa de 1 para 12, com c(P,Q)=2, DQ(R)=3 e DR(R)=0, qual é o novo custo de P até R?",
    answer:
      "Depois da alteração, P recalcula min{2+3, 12+0} = min{5, 12} = 5. Portanto, deixa de compensar ir diretamente para R e P passa a chegar a R via Q com custo 5.",
    tags: ["prática", "revisão", "distance-vector", "bellman-ford"]
  },
  {
    id: "q-4-8-010",
    chapterId: "4.8",
    question: "Porque um erro em Distance Vector pode causar black-holing?",
    answer:
      "Porque um nó pode anunciar um custo de caminho falso ou demasiado bom. Outros nós passam a encaminhar tráfego para ele, e esse erro pode propagar-se, atraindo tráfego para um caminho inválido ou malicioso.",
    tags: ["interpretação", "distance-vector", "black-holing"]
  },
  {
    id: "q-4-9-001",
    chapterId: "4.9",
    question: "Porque a Internet precisa de roteamento hierárquico?",
    answer:
      "Porque há demasiados destinos para uma rede plana. O roteamento hierárquico reduz tabelas e tráfego de atualizações, além de respeitar a autonomia administrativa de cada rede.",
    tags: ["conceito", "roteamento", "as"]
  },
  {
    id: "q-4-9-002",
    chapterId: "4.9",
    question: "O que é um Sistema Autónomo (AS)?",
    answer:
      "É um conjunto de routers e redes sob a mesma administração, que corre um protocolo de roteamento intra-AS comum e define as suas próprias políticas de roteamento.",
    tags: ["conceito", "as"]
  },
  {
    id: "q-4-9-003",
    chapterId: "4.9",
    question: "Distingue roteamento intra-AS e inter-AS.",
    answer:
      "Intra-AS ocorre dentro do mesmo AS e tende a focar desempenho. Inter-AS ocorre entre ASes e dá grande importância a políticas administrativas, escala e controlo de quem transporta tráfego.",
    tags: ["comparação", "as", "roteamento"]
  },
  {
    id: "q-4-9-004",
    chapterId: "4.9",
    question: "O que é um router de gateway?",
    answer:
      "É um router na fronteira de um AS com ligação a outro AS. Normalmente participa em roteamento interno e externo, podendo correr iBGP e eBGP.",
    tags: ["conceito", "bgp", "gateway"]
  },
  {
    id: "q-4-9-005",
    chapterId: "4.9",
    question: "Compara RIP, EIGRP e OSPF.",
    answer:
      "RIP é um protocolo Distance Vector clássico. EIGRP também é baseado em Distance Vector e foi associado à Cisco. OSPF é Link State, aberto, usa Dijkstra e é muito usado como protocolo intra-AS.",
    tags: ["comparação", "rip", "eigrp", "ospf"]
  },
  {
    id: "q-4-9-006",
    chapterId: "4.9",
    question: "Que características importantes tem o OSPF?",
    answer:
      "É aberto, usa Link State, difunde informação de ligações dentro do AS, permite métricas diferentes, autentica mensagens, usa Dijkstra e pode suportar múltiplos caminhos com o mesmo custo.",
    tags: ["conceito", "ospf"]
  },
  {
    id: "q-4-9-007",
    chapterId: "4.9",
    question: "Como funciona o OSPF hierárquico?",
    answer:
      "Divide o AS em áreas e backbone. Informação detalhada de Link State fica limitada à área; para fora, routers de borda sumarizam distâncias e anunciam no backbone, melhorando a escalabilidade.",
    tags: ["conceito", "ospf"]
  },
  {
    id: "q-4-9-008",
    chapterId: "4.9",
    question: "O que é BGP e porque é chamado a 'cola' da Internet?",
    answer:
      "BGP é o protocolo de roteamento inter-AS de facto. Liga ASes, permite anunciar prefixos alcançáveis e propaga informação de atingibilidade entre redes independentes, funcionando como a cola da Internet.",
    tags: ["conceito", "bgp"]
  },
  {
    id: "q-4-9-009",
    chapterId: "4.9",
    question: "Distingue eBGP e iBGP.",
    answer:
      "eBGP troca informação BGP entre routers de ASes diferentes. iBGP propaga essa informação dentro do próprio AS, para que os routers internos saibam por que gateway alcançar destinos externos.",
    tags: ["comparação", "bgp"]
  },
  {
    id: "q-4-9-010",
    chapterId: "4.9",
    question: "O que são AS-PATH e NEXT-HOP num anúncio BGP?",
    answer:
      "AS-PATH é a lista de ASes por onde o anúncio passou, útil para escolha de rotas e deteção de ciclos. NEXT-HOP indica o router específico por onde se deve sair para alcançar o próximo AS/destino.",
    tags: ["conceito", "bgp", "as-path", "next-hop"]
  },
  {
    id: "q-4-9-011",
    chapterId: "4.9",
    question: "Qual é a ordem principal de seleção de rotas BGP estudada?",
    answer:
      "Primeiro preferência local/política, depois AS-PATH mais curto, depois NEXT-HOP mais próximo por hot-potato routing, e por fim critérios adicionais.",
    tags: ["conceito", "bgp", "política"]
  },
  {
    id: "q-4-9-012",
    chapterId: "4.9",
    question: "O que é roteamento batata quente (hot-potato routing)?",
    answer:
      "É escolher o gateway de saída com menor custo intra-AS, tentando entregar o tráfego a outro AS o mais depressa possível. O foco é minimizar custo interno, não necessariamente o caminho global.",
    tags: ["conceito", "bgp", "hot-potato"]
  },
  {
    id: "q-4-1-011",
    chapterId: "4.1",
    question: "Que protocolos e funções aparecem na camada de rede da Internet?",
    answer:
      "A camada de rede inclui o protocolo IP, que define formato de datagramas, endereçamento e tratamento dos pacotes; ICMP, para erros e sinalização; e mecanismos de seleção de caminhos, como protocolos de roteamento ou SDN.",
    tags: ["conceito", "ip", "icmp", "roteamento"]
  },
  {
    id: "q-4-1-012",
    chapterId: "4.1",
    question: "Que papel têm os routers na camada de rede?",
    answer:
      "Os routers examinam campos do cabeçalho IP de todos os datagramas que passam por eles e movem esses datagramas de portos de entrada para portos de saída, formando o caminho ponta-a-ponta.",
    tags: ["conceito", "router", "encaminhamento"]
  },
  {
    id: "q-4-1-013",
    chapterId: "4.1",
    question: "Distingue garantias para datagramas individuais e garantias para fluxos de datagramas.",
    answer:
      "Para datagramas individuais, a rede poderia prometer entrega garantida ou entrega abaixo de certo tempo. Para fluxos, poderia prometer ordem, largura de banda mínima ou controlo do espaçamento entre pacotes.",
    tags: ["comparação", "qos", "modelo-serviço"]
  },
  {
    id: "q-4-1-014",
    chapterId: "4.1",
    question: "Compara plano de controlo por router e SDN.",
    answer:
      "No plano de controlo por router, cada router executa componentes do algoritmo de roteamento e coopera com os outros. Em SDN, a lógica de controlo fica separada em controladores remotos, e os routers ficam mais focados no plano dos dados.",
    tags: ["comparação", "plano-controlo", "sdn"]
  },
  {
    id: "q-4-1-015",
    chapterId: "4.1",
    question: "Porque garantias fortes de QoS tornam a rede mais complexa?",
    answer:
      "Porque os routers teriam de reservar recursos, manter estado por fluxo, controlar perdas, atrasos, ordem ou espaçamento entre pacotes. O best effort evita essa complexidade no núcleo da rede.",
    tags: ["interpretação", "qos", "best-effort"]
  },
  {
    id: "q-4-1-016",
    chapterId: "4.1",
    question: "Que fatores ajudam aplicações em tempo real a funcionar aceitavelmente sobre best effort?",
    answer:
      "A largura de banda disponível cresceu, aplicações adaptam qualidade, serviços usam datacenters e CDNs perto dos clientes, e o controlo de congestão dos serviços elásticos ajuda a estabilizar a rede.",
    tags: ["interpretação", "best-effort", "qos"]
  },
  {
    id: "q-4-2-011",
    chapterId: "4.2",
    question: "Qual é a diferença de escala temporal entre plano de controlo e plano dos dados num router?",
    answer:
      "O plano de controlo, ligado a roteamento e gestão, opera normalmente em software e em escala de milissegundos. O plano dos dados, ligado ao encaminhamento, opera em hardware e em escala de nanossegundos.",
    tags: ["comparação", "router", "plano-dados", "plano-controlo"]
  },
  {
    id: "q-4-2-012",
    chapterId: "4.2",
    question: "Distingue terminação de linha, processamento de ligação e procura no porto de entrada.",
    answer:
      "A terminação de linha recebe bits ao nível físico. O processamento de ligação trata a trama, por exemplo Ethernet, e extrai o datagrama. A procura lê campos do cabeçalho IP e escolhe a porta de saída pela tabela.",
    tags: ["comparação", "router", "porta-entrada"]
  },
  {
    id: "q-4-2-013",
    chapterId: "4.2",
    question: "Que funções são feitas num porto de saída?",
    answer:
      "O porto de saída recebe datagramas vindos do tecido de comutação, guarda-os em buffer se necessário, aplica escalonamento, encapsula o datagrama numa trama de ligação e transmite os bits pela linha.",
    tags: ["conceito", "router", "porta-saída"]
  },
  {
    id: "q-4-2-014",
    chapterId: "4.2",
    question: "Compara fila no porto de entrada e fila no porto de saída.",
    answer:
      "A fila de entrada aparece quando o tecido de comutação não acompanha a chegada combinada dos portos. A fila de saída aparece quando chegam à mesma saída mais datagramas do que a ligação consegue transmitir.",
    tags: ["comparação", "filas", "router"]
  },
  {
    id: "q-4-2-015",
    chapterId: "4.2",
    question: "O que acontece quando um buffer de router transborda?",
    answer:
      "Quando não há espaço para guardar novos datagramas, alguns são descartados. A política de eliminação decide se se descarta o datagrama recém-chegado, outro já na fila ou pacotes de menor prioridade.",
    tags: ["conceito", "buffers", "perda"]
  },
  {
    id: "q-4-2-016",
    chapterId: "4.2",
    question: "Porque o escalonamento por prioridades pode levantar questões de neutralidade da rede?",
    answer:
      "Porque tráfego de certas classes, como voz ou vídeo, pode ser enviado antes de outro tráfego, melhorando o seu desempenho. Isso pode ser útil tecnicamente, mas também favorece alguns fluxos em relação a outros.",
    tags: ["interpretação", "escalonamento", "qos"]
  },
  {
    id: "q-4-2-017",
    chapterId: "4.2",
    question: "Prática: na tabela binária dos slides, para destino 11001000 00010111 00010110 10100001, que interface é escolhida?",
    answer:
      "É escolhida a Interface 0. O destino corresponde ao prefixo 11001000 00010111 00010*** ********, e não há outro prefixo mais específico que também corresponda.",
    tags: ["prática", "router", "longest-prefix"]
  },
  {
    id: "q-4-2-018",
    chapterId: "4.2",
    question: "Prática: para destino 11001000 00010111 00011000 10101010, porque vence a Interface 1 e não a 2?",
    answer:
      "O destino corresponde tanto ao prefixo da Interface 1 como ao da Interface 2, mas a Interface 1 tem mais bits fixos, isto é, prefixo mais longo. Pelo longest prefix matching, vence a rota mais específica.",
    tags: ["prática", "router", "longest-prefix"]
  },
  {
    id: "q-4-2-019",
    chapterId: "4.2",
    question: "Quando é usada a rota por defeito numa tabela de encaminhamento?",
    answer:
      "É usada quando nenhum prefixo mais específico corresponde ao endereço IP de destino. Na tabela dos slides, a entrada com todos os bits como wildcard encaminha para a Interface 3.",
    tags: ["conceito", "router", "longest-prefix"]
  },
  {
    id: "q-4-2-020",
    chapterId: "4.2",
    question: "Prática: se há N portos de entrada de taxa R, que taxa ideal deve ter o tecido de comutação?",
    answer:
      "Idealmente deve aproximar-se de N x R, para conseguir mover simultaneamente o tráfego agregado das entradas para as saídas sem se tornar o gargalo interno do router.",
    tags: ["prática", "router", "tecido-comutação"]
  },
  {
    id: "q-4-3-011",
    chapterId: "4.3",
    question: "Que campos do IPv4 indicam versão, tamanho do cabeçalho e tamanho total?",
    answer:
      "O campo versão indica que protocolo IP está a ser usado, por exemplo 4 em IPv4. O comprimento do cabeçalho indica o tamanho do cabeçalho, que pode variar com opções. O comprimento total indica cabeçalho mais dados em bytes.",
    tags: ["conceito", "ipv4", "datagrama"]
  },
  {
    id: "q-4-3-012",
    chapterId: "4.3",
    question: "Para que serve o campo Tipo de Serviço no IPv4?",
    answer:
      "Serve para indicar o tipo de dados ou classe de tratamento pretendida. A ideia é permitir diferenciação de tráfego, embora a Internet IP tradicional continue a ser essencialmente best effort.",
    tags: ["conceito", "ipv4", "qos"]
  },
  {
    id: "q-4-3-013",
    chapterId: "4.3",
    question: "Para que serve o checksum do cabeçalho IPv4?",
    answer:
      "Serve para detetar erros no cabeçalho IP. Como o TTL muda a cada salto, o checksum do cabeçalho tem de ser atualizado pelos routers no IPv4.",
    tags: ["conceito", "ipv4", "checksum"]
  },
  {
    id: "q-4-3-014",
    chapterId: "4.3",
    question: "Dá exemplos de opções possíveis no cabeçalho IPv4.",
    answer:
      "As opções podem incluir registo da rota tomada, marcação de data/hora ou especificação de uma lista de routers a visitar. Como tornam o cabeçalho variável, aumentam a complexidade de processamento.",
    tags: ["conceito", "ipv4", "opções"]
  },
  {
    id: "q-4-3-015",
    chapterId: "4.3",
    question: "Qual é o tamanho máximo teórico de um datagrama IPv4 e qual é o tamanho típico na prática?",
    answer:
      "O comprimento máximo teórico é cerca de 64 KB, por causa do campo de comprimento total. Na prática, muitos datagramas têm 1500 bytes ou menos, por causa da MTU típica da Ethernet.",
    tags: ["conceito", "ipv4", "mtu"]
  },
  {
    id: "q-4-3-016",
    chapterId: "4.3",
    question: "Que papel tem o ICMP na camada de rede da Internet?",
    answer:
      "ICMP é usado para reportar erros e para sinalização entre hosts e routers. Exemplos comuns são mensagens de destino inalcançável e mecanismos usados por ferramentas como ping e traceroute.",
    tags: ["conceito", "icmp"]
  },
  {
    id: "q-4-3-017",
    chapterId: "4.3",
    question: "Porque o campo protocolo do nível superior só é realmente usado no destino?",
    answer:
      "Routers intermédios encaminham com base no cabeçalho IP e não precisam de entregar o payload a TCP ou UDP. Só o host destino usa esse campo para passar os dados ao protocolo de transporte correto.",
    tags: ["interpretação", "ipv4", "transporte"]
  },
  {
    id: "q-4-3-018",
    chapterId: "4.3",
    question: "Porque o offset de fragmentação é medido em unidades de 8 bytes?",
    answer:
      "O offset indica a posição dos dados do fragmento no datagrama original em blocos de 8 bytes. Por isso, exceto o último, os payloads dos fragmentos devem ter tamanho múltiplo de 8 para os offsets ficarem alinhados.",
    tags: ["conceito", "fragmentação", "offset"]
  },
  {
    id: "q-4-3-019",
    chapterId: "4.3",
    question: "Prática: no exemplo de 4000 bytes e MTU 1500, que flags têm os três fragmentos?",
    answer:
      "Os dois primeiros fragmentos têm flag de mais fragmentos igual a 1, porque ainda há dados a seguir. O último tem essa flag a 0, porque é o fragmento final do datagrama original.",
    tags: ["prática", "fragmentação"]
  },
  {
    id: "q-4-3-020",
    chapterId: "4.3",
    question: "Prática: porque o último fragmento do exemplo tem comprimento 1040 bytes?",
    answer:
      "O payload original é 3980 bytes. Depois de dois fragmentos com 1480 bytes de dados cada, restam 1020 bytes. Somando o cabeçalho IP de 20 bytes, o último fragmento tem 1040 bytes.",
    tags: ["prática", "fragmentação", "mtu"]
  },
  {
    id: "q-4-4-011",
    chapterId: "4.4",
    question: "Como se representa um endereço IPv4 em decimal com pontos?",
    answer:
      "Um endereço IPv4 tem 32 bits divididos em quatro octetos de 8 bits. Cada octeto é escrito em decimal entre 0 e 255, separados por pontos, como 223.1.1.1.",
    tags: ["conceito", "ipv4", "endereçamento"]
  },
  {
    id: "q-4-4-012",
    chapterId: "4.4",
    question: "Prática: 223.1.1.1 corresponde a que octetos binários?",
    answer:
      "223.1.1.1 corresponde a 11011111 00000001 00000001 00000001. Cada número decimal representa um octeto, isto é, 8 bits.",
    tags: ["prática", "ipv4", "endereçamento"]
  },
  {
    id: "q-4-4-013",
    chapterId: "4.4",
    question: "Qual é a receita dos slides para identificar sub-redes numa topologia?",
    answer:
      "Separar cada interface do seu host ou router, criando ilhas de rede isoladas. Cada ilha cujas interfaces comunicam sem passar por outro router corresponde a uma sub-rede.",
    tags: ["conceito", "sub-rede"]
  },
  {
    id: "q-4-4-014",
    chapterId: "4.4",
    question: "Prática: qual é a gama do prefixo 200.23.16.0/23?",
    answer:
      "Um /23 fixa 23 bits e deixa 9 bits de host. A gama vai de 200.23.16.0 até 200.23.17.255, porque o prefixo cobre dois valores do terceiro octeto: 16 e 17.",
    tags: ["prática", "cidr", "sub-rede"]
  },
  {
    id: "q-4-4-015",
    chapterId: "4.4",
    question: "Distingue obter a parte host e obter a parte rede de um endereço IP.",
    answer:
      "A parte host é obtida pelo próprio dispositivo, estaticamente ou por DHCP. A parte rede é atribuída à organização pelo ISP ou pela hierarquia de alocação de endereços.",
    tags: ["comparação", "dhcp", "icann", "endereçamento"]
  },
  {
    id: "q-4-4-016",
    chapterId: "4.4",
    question: "Como o bloco 200.23.16.0/20 pode ser dividido em organizações /23?",
    answer:
      "O /20 do ISP cobre vários /23, como 200.23.16.0/23, 200.23.18.0/23, 200.23.20.0/23, até 200.23.30.0/23. Cada /23 é uma fatia mais específica atribuível a uma organização.",
    tags: ["conceito", "cidr", "agregação"]
  },
  {
    id: "q-4-4-017",
    chapterId: "4.4",
    question: "O que acontece se uma organização muda de ISP mas mantém um prefixo mais específico?",
    answer:
      "O novo ISP pode anunciar uma rota mais específica para essa organização. Pelo longest prefix matching, o prefixo mais específico vence o agregado antigo, encaminhando o tráfego para o novo ISP.",
    tags: ["interpretação", "cidr", "agregação", "longest-prefix"]
  },
  {
    id: "q-4-4-018",
    chapterId: "4.4",
    question: "Que funções a ICANN tem no endereçamento e no DNS?",
    answer:
      "A ICANN coordena a alocação de endereços IP através de registos regionais e gere a zona raiz do DNS, incluindo a delegação de TLDs como .com ou .net.",
    tags: ["conceito", "icann", "dns"]
  },
  {
    id: "q-4-4-019",
    chapterId: "4.4",
    question: "Prática: para 8.6.4.2/18, qual é a gama de endereços utilizáveis por hosts?",
    answer:
      "A rede é 8.6.0.0 e o broadcast é 8.6.63.255. Portanto, a gama utilizável por hosts vai de 8.6.0.1 até 8.6.63.254.",
    tags: ["prática", "revisão", "cidr"]
  },
  {
    id: "q-4-4-020",
    chapterId: "4.4",
    question: "Prática: para 192.168.10.64/26, qual é a rede, broadcast e número de hosts utilizáveis?",
    answer:
      "Num /26 há 6 bits de host, logo 2^6 - 2 = 62 hosts utilizáveis. A rede é 192.168.10.64 e o broadcast é 192.168.10.127.",
    tags: ["prática", "cidr", "sub-rede"]
  },
  {
    id: "q-4-5-011",
    chapterId: "4.5",
    question: "Porque as mensagens DHCP iniciais usam broadcast?",
    answer:
      "Porque o cliente ainda não tem IP válido nem sabe que servidor DHCP existe. Por isso usa origem 0.0.0.0 e destino 255.255.255.255 para alcançar servidores na rede local.",
    tags: ["conceito", "dhcp", "broadcast"]
  },
  {
    id: "q-4-5-012",
    chapterId: "4.5",
    question: "Que portos UDP aparecem no cenário DHCP dos slides?",
    answer:
      "O cliente usa o porto UDP 68 e o servidor DHCP usa o porto UDP 67. As mensagens iniciais aparecem em broadcast porque o cliente ainda está a obter configuração.",
    tags: ["conceito", "dhcp", "udp"]
  },
  {
    id: "q-4-5-013",
    chapterId: "4.5",
    question: "Para que servem transaction ID e lifetime numa troca DHCP?",
    answer:
      "O transaction ID permite associar mensagens da mesma negociação DHCP. O lifetime indica durante quanto tempo o endereço atribuído fica reservado para o cliente antes de ter de ser renovado.",
    tags: ["conceito", "dhcp", "lease"]
  },
  {
    id: "q-4-5-014",
    chapterId: "4.5",
    question: "Quando é que os dois primeiros passos do DHCP podem ser saltados?",
    answer:
      "Segundo a nota dos slides/RFC 2131, Discover e Offer podem ser saltados se o cliente se recorda de um endereço anteriormente alocado e quer tentar reutilizá-lo, começando por DHCP Request.",
    tags: ["conceito", "dhcp", "lease"]
  },
  {
    id: "q-4-5-015",
    chapterId: "4.5",
    question: "Que configuração mínima um DHCP deve entregar para o host funcionar bem fora da LAN?",
    answer:
      "Além do IP, deve entregar máscara de rede, gateway ou router de primeiro salto e servidor DNS. Sem gateway não sai da sub-rede; sem DNS pode ter dificuldade em resolver nomes.",
    tags: ["prática", "dhcp", "dns", "gateway"]
  },
  {
    id: "q-4-5-016",
    chapterId: "4.5",
    question: "Porque o servidor DHCP costuma estar incorporado no router?",
    answer:
      "Porque o router já está ligado às sub-redes locais e é o gateway por defeito. Assim pode servir automaticamente os clientes dessas sub-redes com IP, máscara, gateway e DNS.",
    tags: ["conceito", "dhcp", "router"]
  },
  {
    id: "q-4-6-011",
    chapterId: "4.6",
    question: "Quais são os prefixos privados IPv4 indicados nos slides de NAT?",
    answer:
      "Os prefixos privados são 10.0.0.0/8, 172.16.0.0/12 e 192.168.0.0/16. São usados dentro de redes locais e não são roteáveis diretamente na Internet pública.",
    tags: ["conceito", "nat", "endereçamento"]
  },
  {
    id: "q-4-6-012",
    chapterId: "4.6",
    question: "Aos olhos da Internet exterior, como aparecem os dispositivos atrás de NAT?",
    answer:
      "Aparecem como tráfego vindo do endereço IP público do router NAT, distinguido por números de porto diferentes. O exterior não vê diretamente os endereços privados dos hosts internos.",
    tags: ["conceito", "nat", "portos"]
  },
  {
    id: "q-4-6-013",
    chapterId: "4.6",
    question: "Prática: num NAT, que par é alterado quando 10.0.0.1:3345 sai como 138.76.29.7:5001?",
    answer:
      "O NAT altera o par de origem de 10.0.0.1:3345 para 138.76.29.7:5001 e guarda essa tradução. O destino externo, por exemplo 128.119.40.186:80, mantém-se nesse datagrama de saída.",
    tags: ["prática", "nat", "portos"]
  },
  {
    id: "q-4-6-014",
    chapterId: "4.6",
    question: "Porque o NAT permite mudar de ISP sem renumerar a rede local?",
    answer:
      "Porque os hosts internos usam endereços privados independentes do ISP. Se o endereço público externo mudar, o router NAT traduz para o novo IP público sem obrigar a alterar os IPs privados internos.",
    tags: ["interpretação", "nat", "endereçamento"]
  },
  {
    id: "q-4-6-015",
    chapterId: "4.6",
    question: "Em que sentido o NAT dá alguma ocultação, mas não deve ser confundido com segurança completa?",
    answer:
      "Hosts internos não ficam diretamente endereçáveis a partir da Internet, o que oculta parte da rede. Mas isso não substitui mecanismos de segurança: o NAT traduz endereços, não valida aplicações nem elimina vulnerabilidades.",
    tags: ["interpretação", "nat", "segurança"]
  },
  {
    id: "q-4-6-016",
    chapterId: "4.6",
    question: "Porque o NAT viola a separação ideal entre camadas?",
    answer:
      "Porque um router, que deveria processar essencialmente informação de nível rede, altera números de porto, que pertencem ao nível de transporte. Isso quebra a transparência ponta-a-ponta.",
    tags: ["interpretação", "nat", "camadas"]
  },
  {
    id: "q-4-6-017",
    chapterId: "4.6",
    question: "Porque servidores atrás de NAT são um problema?",
    answer:
      "Porque clientes externos não conseguem iniciar ligação diretamente para um endereço privado interno. É preciso NAT traversal, port forwarding, relays ou técnicas semelhantes para encaminhar a ligação até ao servidor interno.",
    tags: ["conceito", "nat", "nat-traversal"]
  },
  {
    id: "q-4-7-011",
    chapterId: "4.7",
    question: "Além da exaustão de endereços, que motivações levaram ao IPv6?",
    answer:
      "O IPv6 também procurou simplificar e acelerar o processamento do cabeçalho nos routers e introduzir campos mais adequados ao suporte de fluxos e níveis de serviço.",
    tags: ["conceito", "ipv6", "qos"]
  },
  {
    id: "q-4-7-012",
    chapterId: "4.7",
    question: "Porque o cabeçalho IPv6 fixo de 40 bytes ajuda os routers?",
    answer:
      "Um cabeçalho de tamanho fixo é mais simples de processar rapidamente em hardware. Ao evitar opções variáveis no cabeçalho principal e remover o checksum, reduz trabalho por salto.",
    tags: ["interpretação", "ipv6", "router"]
  },
  {
    id: "q-4-7-013",
    chapterId: "4.7",
    question: "Distingue Priority, Flow Label e Hop Limit no IPv6.",
    answer:
      "Priority identifica prioridade entre datagramas de um fluxo. Flow Label marca datagramas do mesmo fluxo. Hop Limit é o equivalente ao TTL do IPv4 e é decrementado a cada salto.",
    tags: ["comparação", "ipv6"]
  },
  {
    id: "q-4-7-014",
    chapterId: "4.7",
    question: "Como se escreve um endereço IPv6 dentro de um URL?",
    answer:
      "O endereço IPv6 deve ficar entre parênteses retos para não confundir os dois-pontos do endereço com a separação do porto. Exemplo: http://[2001:db8::8a2e:70:7334]:8080/caminho.",
    tags: ["prática", "ipv6", "endereçamento"]
  },
  {
    id: "q-4-7-015",
    chapterId: "4.7",
    question: "Onde ficam as opções no IPv6, se não estão no cabeçalho principal?",
    answer:
      "As opções ficam em cabeçalhos de extensão fora do cabeçalho principal. O campo Next Header encadeia esses cabeçalhos ou indica diretamente o protocolo superior, como TCP ou UDP.",
    tags: ["conceito", "ipv6", "next-header"]
  },
  {
    id: "q-4-7-016",
    chapterId: "4.7",
    question: "O que significa dizer que não houve um 'flag day' para migrar de IPv4 para IPv6?",
    answer:
      "Significa que não foi possível atualizar todos os routers da Internet ao mesmo tempo. A transição teve de permitir coexistência entre routers e redes IPv4 e IPv6.",
    tags: ["conceito", "ipv6", "tunelamento"]
  },
  {
    id: "q-4-7-017",
    chapterId: "4.7",
    question: "Prática: num túnel IPv6 sobre IPv4 entre B e E, que endereços aparecem no cabeçalho externo e no interno?",
    answer:
      "No cabeçalho IPv4 externo aparecem origem B e destino E, que são as pontas do túnel. No datagrama IPv6 interno mantêm-se os endereços originais, por exemplo origem A e destino F.",
    tags: ["prática", "ipv6", "tunelamento"]
  },
  {
    id: "q-4-7-018",
    chapterId: "4.7",
    question: "Porque a adoção do IPv6 foi lenta apesar do esgotamento do IPv4?",
    answer:
      "Porque a Internet é enorme, heterogénea e administrada por muitas entidades. NAT também reduziu a urgência imediata, e a migração exige compatibilidade com IPv4 durante muito tempo.",
    tags: ["interpretação", "ipv6", "nat"]
  },
  {
    id: "q-4-8-011",
    chapterId: "4.8",
    question: "Como se relacionam algoritmo de roteamento e tabela de encaminhamento?",
    answer:
      "O algoritmo de roteamento calcula caminhos ponta-a-ponta de menor custo. A tabela de encaminhamento resultante diz, localmente em cada router, que ligação ou interface de saída usar para cada destino.",
    tags: ["conceito", "roteamento", "encaminhamento"]
  },
  {
    id: "q-4-8-012",
    chapterId: "4.8",
    question: "Distingue algoritmos de roteamento estáticos e dinâmicos.",
    answer:
      "Em algoritmos estáticos, as rotas mudam lentamente e raramente. Em algoritmos dinâmicos, as rotas adaptam-se mais rapidamente, por atualizações periódicas ou resposta a mudanças nos custos das ligações.",
    tags: ["comparação", "roteamento"]
  },
  {
    id: "q-4-8-013",
    chapterId: "4.8",
    question: "Que significados pode ter o custo de uma ligação num grafo de roteamento?",
    answer:
      "Pode ser simplesmente 1 por salto, pode ser inversamente proporcional à largura de banda, ou diretamente proporcional ao atraso/congestão. O algoritmo minimiza a soma desses custos.",
    tags: ["conceito", "grafo", "roteamento"]
  },
  {
    id: "q-4-8-014",
    chapterId: "4.8",
    question: "Prática: no exemplo de Dijkstra com origem u, quais são os primeiros nós adicionados a N'?",
    answer:
      "Começa com N' = {u}. O menor custo inicial é x com custo 1, por isso entra x. Depois y fica com custo 2 via x e também v tem custo 2 via u; o exemplo dos slides escolhe y e depois v.",
    tags: ["prática", "dijkstra"]
  },
  {
    id: "q-4-8-015",
    chapterId: "4.8",
    question: "Prática: no exemplo de Dijkstra com origem u, que ligação inicial usa u para chegar a z?",
    answer:
      "Usa a ligação (u,x). O caminho de menor custo para z é u -> x -> y -> z, com custo 1 + 1 + 2 = 4, portanto a primeira ligação a pôr na tabela de u é (u,x).",
    tags: ["prática", "dijkstra"]
  },
  {
    id: "q-4-8-016",
    chapterId: "4.8",
    question: "Como se constrói a tabela de encaminhamento a partir dos predecessores de Dijkstra?",
    answer:
      "Para cada destino, segue-se a cadeia de predecessores p(v) para trás até à origem. A primeira ligação que sai da origem nesse caminho é a interface ou ligação a colocar na tabela.",
    tags: ["prática", "dijkstra", "encaminhamento"]
  },
  {
    id: "q-4-8-017",
    chapterId: "4.8",
    question: "Qual é a complexidade básica de Dijkstra apresentada nos slides?",
    answer:
      "Na implementação simples, para n nós, há cerca de n(n+1)/2 comparações, ou seja, O(n^2). Existem implementações mais eficientes, como O(n log n).",
    tags: ["conceito", "dijkstra", "complexidade"]
  },
  {
    id: "q-4-8-018",
    chapterId: "4.8",
    question: "Qual é a complexidade de mensagens associada ao Link State?",
    answer:
      "Cada router tem de difundir o seu link state. Como cada mensagem pode atravessar O(n) ligações e há n routers a anunciar, a complexidade global de mensagens é O(n^2).",
    tags: ["conceito", "link-state", "complexidade"]
  },
  {
    id: "q-4-8-019",
    chapterId: "4.8",
    question: "Porque Dijkstra pode oscilar se os custos dependerem do tráfego?",
    answer:
      "Se uma rota escolhida atrai tráfego, esse tráfego pode aumentar o custo dessa rota. A rede recalcula e muda para outra rota, que por sua vez fica carregada, podendo criar oscilações sucessivas.",
    tags: ["interpretação", "dijkstra", "oscilações"]
  },
  {
    id: "q-4-8-020",
    chapterId: "4.8",
    question: "O que significa Distance Vector ser self-stopping?",
    answer:
      "Significa que um nó só notifica vizinhos quando o seu vetor muda. Se não recebe atualizações e não há alterações locais de custo, não faz nada; o algoritmo para naturalmente quando converge.",
    tags: ["conceito", "distance-vector"]
  },
  {
    id: "q-4-8-021",
    chapterId: "4.8",
    question: "Prática de revisão completa: após P-R passar de 1 para 12, qual é o novo vetor de P para P,Q,R,S?",
    answer:
      "Com c(P,Q)=2 e c(P,R)=12, P calcula: P=0; Q=min{2+0,12+3}=2; R=min{2+3,12+0}=5; S=min{2+3,12+2}=5. Novo vetor: [0, 2, 5, 5], tudo via Q exceto o próprio P.",
    tags: ["prática", "revisão", "distance-vector", "bellman-ford"]
  },
  {
    id: "q-4-8-022",
    chapterId: "4.8",
    question: "Compara a robustez de Link State e Distance Vector perante um router comprometido.",
    answer:
      "Em Link State, um router pode anunciar custos de ligação errados, mas cada router calcula a sua própria tabela. Em Distance Vector, um nó pode anunciar custos de caminho falsos, e esse erro pode propagar-se porque outros usam a tabela dele.",
    tags: ["comparação", "link-state", "distance-vector", "black-holing"]
  },
  {
    id: "q-4-9-013",
    chapterId: "4.9",
    question: "Quais são os dois grandes motivos para a Internet não usar roteamento plano?",
    answer:
      "Escala e autonomia administrativa. Há demasiados destinos para tabelas planas e troca global de informação; além disso, cada rede/operador quer controlar o roteamento dentro do seu domínio.",
    tags: ["conceito", "as", "roteamento"]
  },
  {
    id: "q-4-9-014",
    chapterId: "4.9",
    question: "Como intra-AS e inter-AS configuram a tabela de encaminhamento de um router?",
    answer:
      "O intra-AS define entradas para destinos internos ao AS. Para destinos externos, o inter-AS aprende atingibilidade e escolhe gateways, enquanto o intra-AS indica como chegar internamente a esses gateways.",
    tags: ["conceito", "as", "bgp", "ospf"]
  },
  {
    id: "q-4-9-015",
    chapterId: "4.9",
    question: "Quais são as duas tarefas principais do roteamento inter-AS num AS?",
    answer:
      "Aprender que destinos externos são atingíveis através de ASes vizinhos e propagar essa informação de atingibilidade aos routers internos do próprio AS.",
    tags: ["conceito", "as", "bgp"]
  },
  {
    id: "q-4-9-016",
    chapterId: "4.9",
    question: "Que detalhes dos slides distinguem RIP, EIGRP, OSPF e IS-IS?",
    answer:
      "RIP é Distance Vector clássico e troca vetores a cada 30 segundos. EIGRP é baseado em DV e foi associado à Cisco. OSPF é Link State e aberto. IS-IS é uma norma ISO essencialmente semelhante a OSPF.",
    tags: ["comparação", "rip", "eigrp", "ospf", "isis"]
  },
  {
    id: "q-4-9-017",
    chapterId: "4.9",
    question: "Porque se diz que OSPF corre diretamente sobre IP?",
    answer:
      "Porque as mensagens OSPF são transportadas diretamente por IP, em vez de usarem TCP ou UDP. Os routers difundem link state dentro do AS para todos calcularem rotas com Dijkstra.",
    tags: ["conceito", "ospf", "ip"]
  },
  {
    id: "q-4-9-018",
    chapterId: "4.9",
    question: "Que vantagens adicionais de OSPF são destacadas nos slides?",
    answer:
      "OSPF pode usar várias métricas de custo, como largura de banda ou atraso; autentica mensagens para prevenir intrusões; e permite múltiplos caminhos com o mesmo custo.",
    tags: ["conceito", "ospf", "segurança"]
  },
  {
    id: "q-4-9-019",
    chapterId: "4.9",
    question: "Distingue routers locais, routers de borda de área, routers de backbone e routers de fronteira em OSPF hierárquico.",
    answer:
      "Routers locais difundem link state só na área e encaminham para fora via borda. Routers de borda sumarizam distâncias e anunciam no backbone. Routers de backbone correm OSPF no backbone. Routers de fronteira ligam a outros ASes.",
    tags: ["comparação", "ospf", "hierarquia"]
  },
  {
    id: "q-4-9-020",
    chapterId: "4.9",
    question: "O que é uma sessão BGP?",
    answer:
      "É uma ligação TCP semi-permanente entre dois routers BGP, chamados pares, usada para trocar mensagens BGP e anunciar caminhos até prefixos de destino.",
    tags: ["conceito", "bgp", "tcp"]
  },
  {
    id: "q-4-9-021",
    chapterId: "4.9",
    question: "Porque BGP é classificado como protocolo path vector?",
    answer:
      "Porque anuncia caminhos compostos por sequências de ASes até prefixos. Ao receber um anúncio como AS3,X, um AS sabe que o AS3 promete encaminhar tráfego em direção ao prefixo X.",
    tags: ["conceito", "bgp", "path-vector", "as-path"]
  },
  {
    id: "q-4-9-022",
    chapterId: "4.9",
    question: "Quais são as quatro mensagens BGP principais e para que servem?",
    answer:
      "OPEN abre a sessão TCP e autentica o par. UPDATE anuncia caminhos novos ou retira antigos. KEEPALIVE mantém a sessão ativa e confirma OPEN. NOTIFICATION reporta erros e pode fechar a ligação.",
    tags: ["conceito", "bgp"]
  },
  {
    id: "q-4-9-023",
    chapterId: "4.9",
    question: "O que significa dizer que um anúncio BGP é prefixo mais atributos?",
    answer:
      "O prefixo é o destino anunciado. Os atributos descrevem o caminho e a decisão de roteamento; dois importantes são AS-PATH, lista de ASes atravessados, e NEXT-HOP, router interno para o próximo salto.",
    tags: ["conceito", "bgp", "as-path", "next-hop"]
  },
  {
    id: "q-4-9-024",
    chapterId: "4.9",
    question: "Prática: se AS2 recebe via eBGP o caminho AS3,X e o aceita, como pode essa rota chegar ao AS1?",
    answer:
      "AS2 propaga internamente a informação via iBGP aos seus routers. Depois um gateway do AS2 pode anunciar ao AS1, via eBGP, um caminho do tipo AS2,AS3,X.",
    tags: ["prática", "bgp", "ebgp", "ibgp"]
  },
  {
    id: "q-4-9-025",
    chapterId: "4.9",
    question: "Como BGP e OSPF cooperam para preencher a tabela até um destino externo X?",
    answer:
      "BGP indica que o caminho até X passa por certo gateway, aprendido via iBGP. OSPF intra-AS calcula como chegar internamente a esse gateway; a interface escolhida para o gateway passa a ser usada também para X.",
    tags: ["prática", "bgp", "ospf", "encaminhamento"]
  },
  {
    id: "q-4-9-026",
    chapterId: "4.9",
    question: "Explica o exemplo de política em que um ISP não anuncia uma rota.",
    answer:
      "Um ISP costuma querer transportar tráfego de/para clientes, não tráfego de passagem entre outros ISPs. Se B não lucra com a rota C-B-A-w, pode não anunciar BAw a C; assim C escolhe outro caminho para w.",
    tags: ["interpretação", "bgp", "política"]
  },
  {
    id: "q-4-9-027",
    chapterId: "4.9",
    question: "Porque no roteamento inter-AS as políticas podem ser mais importantes que o desempenho?",
    answer:
      "Porque ASes pertencem a entidades diferentes, com relações comerciais e regras próprias. O administrador quer controlar quem usa a sua rede e por onde o tráfego passa, mesmo que outro caminho fosse tecnicamente mais curto.",
    tags: ["interpretação", "bgp", "política", "as"]
  },
  {
    id: "q-5-1-001",
    chapterId: "5.1",
    question: "Qual é a responsabilidade principal do nível de ligação?",
    answer:
      "O nível de ligação transfere um datagrama entre dois nós fisicamente adjacentes, através de uma ligação concreta. Para isso encapsula o datagrama numa trama e usa o protocolo dessa ligação, como Ethernet, WiFi ou PPP.",
    tags: ["conceito", "ligação", "trama"]
  },
  {
    id: "q-5-1-002",
    chapterId: "5.1",
    question: "O que são nós, ligações e tramas no nível de ligação?",
    answer:
      "Nós são hosts e routers. Ligações são canais que ligam nós adjacentes, com ou sem fios. Trama é a unidade de dados do nível de ligação e transporta dentro dela o datagrama vindo do nível de rede.",
    tags: ["conceito", "ligação", "trama"]
  },
  {
    id: "q-5-1-003",
    chapterId: "5.1",
    question: "Porque o mesmo datagrama pode atravessar protocolos de ligação diferentes?",
    answer:
      "Porque cada salto físico do caminho pode usar uma tecnologia própria. Um datagrama pode sair por WiFi, seguir por Ethernet e depois por outra tecnologia; o datagrama IP mantém-se, mas a trama de ligação é recriada em cada ligação.",
    tags: ["conceito", "encapsulamento"]
  },
  {
    id: "q-5-1-004",
    chapterId: "5.1",
    question: "O que é framing?",
    answer:
      "Framing é o serviço de encapsular o datagrama numa trama, adicionando cabeçalho e rodapé de nível ligação. Esses campos permitem transportar, identificar e verificar a trama na ligação local.",
    tags: ["conceito", "framing", "trama"]
  },
  {
    id: "q-5-1-005",
    chapterId: "5.1",
    question: "Que serviços podem ser prestados pelo nível de ligação?",
    answer:
      "Pode prestar framing, acesso ao meio, endereçamento MAC, deteção de erros, correção de erros, controlo de fluxo, entrega fiável entre nós adjacentes e suporte a half-duplex ou full-duplex.",
    tags: ["conceito", "serviços", "ligação"]
  },
  {
    id: "q-5-1-006",
    chapterId: "5.1",
    question: "Distingue deteção de erros e correção de erros.",
    answer:
      "Deteção de erros permite perceber que a trama chegou corrompida, levando normalmente ao descarte ou retransmissão. Correção de erros vai mais longe: permite identificar e corrigir bits errados sem pedir retransmissão.",
    tags: ["comparação", "erros"]
  },
  {
    id: "q-5-1-007",
    chapterId: "5.1",
    question: "Porque pode fazer sentido ter fiabilidade no nível de ligação mesmo existindo TCP?",
    answer:
      "Porque corrigir perdas localmente pode ser muito mais barato, sobretudo em ligações wireless com muitos erros. O TCP continua a garantir fiabilidade ponta-a-ponta, mas a ligação pode evitar retransmissões longas e caras.",
    tags: ["revisão", "fiabilidade", "tcp", "wireless"]
  },
  {
    id: "q-5-1-008",
    chapterId: "5.1",
    question: "Onde é implementado o nível de ligação num host?",
    answer:
      "É implementado no adaptador de rede, ou NIC, e no respetivo hardware, firmware e software. A NIC implementa normalmente o nível de ligação e o nível físico, como numa placa Ethernet ou WiFi.",
    tags: ["conceito", "nic", "adaptador"]
  },
  {
    id: "q-5-1-009",
    chapterId: "5.1",
    question: "O que faz o adaptador no lado emissor e no lado recetor?",
    answer:
      "No emissor, encapsula o datagrama numa trama, acrescenta campos de controlo e transmite. No recetor, recebe a trama, verifica erros e outros controlos, extrai o datagrama e entrega-o ao nível de rede.",
    tags: ["conceito", "adaptador", "trama"]
  },
  {
    id: "q-5-1-010",
    chapterId: "5.1",
    question: "Distingue half-duplex e full-duplex.",
    answer:
      "Em half-duplex, ambos os nós podem transmitir, mas não ao mesmo tempo. Em full-duplex, os dois lados podem transmitir simultaneamente, o que aumenta a eficiência e evita colisões nessa ligação dedicada.",
    tags: ["comparação", "duplex"]
  },
  {
    id: "q-5-2-001",
    chapterId: "5.2",
    question: "Qual é a diferença entre uma ligação ponto-a-ponto e uma ligação broadcast?",
    answer:
      "Numa ligação ponto-a-ponto há um emissor e um recetor numa ligação dedicada. Numa ligação broadcast, vários nós partilham o mesmo canal, como WiFi ou Ethernet antiga, podendo interferir uns com os outros.",
    tags: ["comparação", "acesso-múltiplo"]
  },
  {
    id: "q-5-2-002",
    chapterId: "5.2",
    question: "O que é uma colisão num meio partilhado?",
    answer:
      "É a interferência que ocorre quando dois ou mais nós transmitem ao mesmo tempo no mesmo canal. O sinal fica corrompido e o tempo usado nessas transmissões é desperdiçado.",
    tags: ["conceito", "colisão"]
  },
  {
    id: "q-5-2-003",
    chapterId: "5.2",
    question: "O que é um protocolo de acesso múltiplo?",
    answer:
      "É um algoritmo distribuído que decide quando cada nó pode transmitir num canal partilhado. A coordenação usa o próprio canal, sem um canal separado fora de banda.",
    tags: ["conceito", "acesso-múltiplo"]
  },
  {
    id: "q-5-2-004",
    chapterId: "5.2",
    question: "Quais seriam as propriedades de um protocolo de acesso múltiplo ideal?",
    answer:
      "Se só um nó transmite, usa a taxa R inteira. Se M nós transmitem, cada um obtém em média R/M. Além disso, seria descentralizado, sem sincronização global complexa, e simples de implementar.",
    tags: ["conceito", "acesso-múltiplo"]
  },
  {
    id: "q-5-2-005",
    chapterId: "5.2",
    question: "Compara as três famílias de protocolos de acesso múltiplo.",
    answer:
      "Divisão do canal reparte tempo ou frequência de forma fixa. Acesso aleatório permite transmissões sem reserva e recupera de colisões. Acesso à vez usa turnos, como polling ou token, evitando colisões à custa de coordenação.",
    tags: ["comparação", "tdma", "fdma", "csma"]
  },
  {
    id: "q-5-2-006",
    chapterId: "5.2",
    question: "Distingue TDMA e FDMA.",
    answer:
      "TDMA divide o canal em slots de tempo e cada nó transmite na sua slot. FDMA divide o espetro em bandas de frequência e cada nó usa a sua banda. Ambos desperdiçam recursos quando há nós sem dados.",
    tags: ["comparação", "tdma", "fdma"]
  },
  {
    id: "q-5-2-007",
    chapterId: "5.2",
    question: "Prática: num TDMA com 6 nós, só os nós 1, 3 e 4 têm pacotes. O que acontece às slots 2, 5 e 6?",
    answer:
      "Ficam por usar nessa ronda. Esta é a grande ineficiência da divisão fixa do canal: mesmo havendo tráfego noutros nós, a slot reservada a um nó sem dados fica vazia.",
    tags: ["prática", "tdma"]
  },
  {
    id: "q-5-2-008",
    chapterId: "5.2",
    question: "Porque ainda podem ocorrer colisões em CSMA se os nós escutam antes de transmitir?",
    answer:
      "Por causa do atraso de propagação. Dois nós afastados podem escutar o canal como livre antes de o sinal do outro chegar, começando a transmitir quase ao mesmo tempo e colidindo.",
    tags: ["conceito", "csma", "colisão"]
  },
  {
    id: "q-5-2-009",
    chapterId: "5.2",
    question: "Distingue CSMA e CSMA/CD.",
    answer:
      "Ambos escutam antes de transmitir. No CSMA simples, se houver colisão, a trama pode continuar a ser transmitida até ao fim. No CSMA/CD, o emissor deteta a colisão durante a transmissão, aborta e tenta novamente após backoff.",
    tags: ["comparação", "revisão", "csma", "csma-cd"]
  },
  {
    id: "q-5-2-010",
    chapterId: "5.2",
    question: "Quando é melhor divisão do canal e quando é melhor acesso aleatório?",
    answer:
      "Divisão do canal tende a ser eficiente e justa em carga elevada, mas desperdiça em carga baixa. Acesso aleatório é eficiente em carga baixa, pois um nó pode usar a taxa toda, mas sofre com colisões em carga elevada.",
    tags: ["comparação", "acesso-múltiplo"]
  },
  {
    id: "q-5-2-011",
    chapterId: "5.2",
    question: "Compara polling e token passing.",
    answer:
      "No polling, um mestre pergunta a cada nó se quer transmitir, criando overhead, latência e ponto único de falha. No token passing, só transmite quem tem o token; evita colisões, mas há overhead e problema se o token se perder.",
    tags: ["comparação", "polling", "token"]
  },
  {
    id: "q-5-3-001",
    chapterId: "5.3",
    question: "Distingue endereço IP e endereço MAC.",
    answer:
      "O IP é um endereço de nível rede, hierárquico e usado para encaminhamento entre redes. O MAC é um endereço de nível ligação, plano, geralmente de 48 bits, usado para entrega local de tramas dentro da LAN.",
    tags: ["comparação", "mac", "ip"]
  },
  {
    id: "q-5-3-002",
    chapterId: "5.3",
    question: "Porque se diz que o MAC é portátil mas o IP não é?",
    answer:
      "O MAC pertence à interface de rede e acompanha o adaptador quando muda de LAN. O IP depende da sub-rede onde o host está ligado, por isso normalmente muda quando o dispositivo muda de rede.",
    tags: ["conceito", "mac", "ip"]
  },
  {
    id: "q-5-3-003",
    chapterId: "5.3",
    question: "Qual afirmação é verdadeira sobre endereços MAC: são dados por DHCP, têm 48 bits em hexadecimal, são roteáveis na Internet ou só existem em Apple?",
    answer:
      "A verdadeira é que geralmente têm 48 bits e são expressos em hexadecimal. DHCP atribui IP, não MAC; MAC não é roteável na Internet; e MAC não tem relação especial com a Apple.",
    tags: ["revisão", "mac"]
  },
  {
    id: "q-5-3-004",
    chapterId: "5.3",
    question: "Para que serve o ARP?",
    answer:
      "ARP resolve o problema de descobrir o endereço MAC correspondente a um endereço IP dentro da mesma rede local. Sem esse mapeamento, o host sabe o IP de destino local, mas não sabe que MAC pôr na trama.",
    tags: ["conceito", "arp"]
  },
  {
    id: "q-5-3-005",
    chapterId: "5.3",
    question: "O que contém uma entrada típica de tabela ARP?",
    answer:
      "Contém o endereço IP, o endereço MAC correspondente e um TTL. O TTL indica durante quanto tempo a entrada fica válida antes de expirar e ser esquecida.",
    tags: ["conceito", "arp", "ttl"]
  },
  {
    id: "q-5-3-006",
    chapterId: "5.3",
    question: "Como funciona um pedido ARP dentro da mesma LAN?",
    answer:
      "O host envia uma consulta ARP em broadcast perguntando quem tem certo IP. O nó que possui esse IP responde diretamente com o seu MAC. O emissor guarda o resultado na tabela ARP.",
    tags: ["conceito", "arp", "broadcast"]
  },
  {
    id: "q-5-3-007",
    chapterId: "5.3",
    question: "Qual é o endereço MAC de broadcast e quando é usado no ARP?",
    answer:
      "É FF-FF-FF-FF-FF-FF. É usado no pedido ARP, porque o emissor ainda não sabe o MAC do destino e precisa de fazer a pergunta a todos os nós da LAN.",
    tags: ["conceito", "arp", "broadcast"]
  },
  {
    id: "q-5-3-008",
    chapterId: "5.3",
    question: "Prática: A quer enviar para B na mesma LAN, sabe o IP de B mas não sabe o MAC. Que passos ocorrem?",
    answer:
      "A envia ARP Request em broadcast. B reconhece o seu IP e envia ARP Reply unicast com o seu MAC. A guarda IP->MAC na tabela ARP e depois envia a trama Ethernet para o MAC de B.",
    tags: ["prática", "arp"]
  },
  {
    id: "q-5-3-009",
    chapterId: "5.3",
    question: "Quando um host envia para outra rede, que MAC coloca na primeira trama?",
    answer:
      "Coloca como MAC de destino o MAC da interface do router/gateway na sua LAN, não o MAC do host final. O IP de destino no datagrama continua a ser o IP do host final.",
    tags: ["prática", "arp", "gateway"]
  },
  {
    id: "q-5-3-010",
    chapterId: "5.3",
    question: "Quando um datagrama atravessa routers, que endereços mudam e quais se mantêm?",
    answer:
      "Os endereços MAC mudam a cada salto, porque identificam origem e destino da ligação local. Os endereços IP de origem e destino mantêm-se ponta-a-ponta, salvo casos especiais como NAT.",
    tags: ["comparação", "mac", "ip", "roteamento"]
  },
  {
    id: "q-5-4-001",
    chapterId: "5.4",
    question: "O que é Ethernet e porque é importante?",
    answer:
      "Ethernet é a tecnologia dominante de LAN com fios. É simples, barata, muito difundida e evoluiu de 10 Mbps para velocidades até centenas de Gbps, mantendo compatibilidade com a ideia base de tramas Ethernet.",
    tags: ["conceito", "ethernet"]
  },
  {
    id: "q-5-4-002",
    chapterId: "5.4",
    question: "Compara a topologia Ethernet em barramento com a topologia em estrela.",
    answer:
      "No barramento, todos os nós partilham o mesmo meio e pertencem ao mesmo domínio de colisão. Na estrela moderna, cada host liga a um switch e cada ligação pode ser um domínio de colisão separado.",
    tags: ["comparação", "ethernet", "topologia"]
  },
  {
    id: "q-5-4-003",
    chapterId: "5.4",
    question: "O que é um domínio de colisão?",
    answer:
      "É o conjunto de nós cujas transmissões podem colidir entre si. Em Ethernet antiga com meio partilhado, muitos nós estavam no mesmo domínio; com switches, cada ligação dedicada reduz esse problema.",
    tags: ["conceito", "colisão", "ethernet"]
  },
  {
    id: "q-5-4-004",
    chapterId: "5.4",
    question: "Quais são os campos principais de uma trama Ethernet?",
    answer:
      "Preâmbulo, endereço MAC de destino, endereço MAC de origem, campo Tipo, dados ou payload e CRC. O cabeçalho identifica adaptadores e protocolo superior; o CRC permite detetar erros.",
    tags: ["conceito", "trama", "ethernet"]
  },
  {
    id: "q-5-4-005",
    chapterId: "5.4",
    question: "Para que serve o preâmbulo da trama Ethernet?",
    answer:
      "Serve para sincronizar os relógios do emissor e do recetor antes da receção dos campos principais da trama. É uma sequência conhecida de bits no início da transmissão.",
    tags: ["conceito", "ethernet", "preâmbulo"]
  },
  {
    id: "q-5-4-006",
    chapterId: "5.4",
    question: "O que faz um adaptador Ethernet ao receber uma trama cujo MAC destino não é o seu nem broadcast?",
    answer:
      "Descarta a trama. O adaptador só entrega ao nível superior tramas destinadas ao seu próprio MAC ou ao endereço MAC de broadcast.",
    tags: ["prática", "ethernet", "mac"]
  },
  {
    id: "q-5-4-007",
    chapterId: "5.4",
    question: "Para que serve o campo Tipo numa trama Ethernet?",
    answer:
      "Indica qual é o protocolo do nível superior transportado no payload, normalmente IP. Assim, o recetor sabe a que módulo entregar o conteúdo depois de extrair os dados da trama.",
    tags: ["conceito", "ethernet"]
  },
  {
    id: "q-5-4-008",
    chapterId: "5.4",
    question: "O que acontece se o CRC indicar erro numa trama Ethernet?",
    answer:
      "A trama é descartada. Ethernet deteta o erro, mas não envia ACK ou NAK ao emissor; a recuperação, se existir, fica para protocolos de nível superior, como TCP.",
    tags: ["conceito", "crc", "erros"]
  },
  {
    id: "q-5-4-009",
    chapterId: "5.4",
    question: "O que significa dizer que Ethernet é sem ligação e não fiável?",
    answer:
      "Sem ligação significa que não há handshaking prévio entre adaptadores. Não fiável significa que o recetor não envia ACK/NAK e tramas perdidas ou descartadas só são recuperadas se níveis superiores o fizerem.",
    tags: ["conceito", "ethernet", "fiabilidade"]
  },
  {
    id: "q-5-4-010",
    chapterId: "5.4",
    question: "Como funciona CSMA/CD na Ethernet clássica?",
    answer:
      "O adaptador escuta antes de transmitir. Se o canal parece livre, transmite; se detetar colisão durante a transmissão, aborta e espera um tempo aleatório de backoff antes de tentar novamente.",
    tags: ["conceito", "ethernet", "csma-cd"]
  },
  {
    id: "q-5-5-001",
    chapterId: "5.5",
    question: "O que é um switch Ethernet?",
    answer:
      "É um dispositivo de nível ligação que armazena e encaminha tramas Ethernet. Examina o MAC de destino e encaminha seletivamente para uma ou mais interfaces de saída.",
    tags: ["conceito", "switch"]
  },
  {
    id: "q-5-5-002",
    chapterId: "5.5",
    question: "Porque se diz que um switch é transparente, plug-and-play e auto-didata?",
    answer:
      "É transparente porque os hosts não precisam de saber que ele existe. É plug-and-play porque funciona sem configuração manual básica. É auto-didata porque aprende sozinho que MACs estão atrás de que interfaces.",
    tags: ["conceito", "switch"]
  },
  {
    id: "q-5-5-003",
    chapterId: "5.5",
    question: "Como um switch permite transmissões simultâneas?",
    answer:
      "Cada host tem uma ligação dedicada ao switch e o switch tem buffers. Comunicações que usam portas de saída diferentes podem ocorrer em simultâneo, por exemplo A->A' e B->B', sem colisões.",
    tags: ["conceito", "switch", "full-duplex"]
  },
  {
    id: "q-5-5-004",
    chapterId: "5.5",
    question: "Que informação existe numa tabela de comutação?",
    answer:
      "Cada entrada associa um endereço MAC à interface por onde se chega a esse host, além de um timestamp ou validade. É semelhante a uma tabela de encaminhamento, mas aprendida automaticamente.",
    tags: ["conceito", "switch", "tabela"]
  },
  {
    id: "q-5-5-005",
    chapterId: "5.5",
    question: "Como funciona a auto-aprendizagem de um switch?",
    answer:
      "Sempre que recebe uma trama, o switch observa o MAC de origem e a interface de chegada. Depois grava que esse MAC é alcançável por essa interface.",
    tags: ["conceito", "switch", "auto-aprendizagem"]
  },
  {
    id: "q-5-5-006",
    chapterId: "5.5",
    question: "O que faz um switch quando conhece o destino da trama?",
    answer:
      "Se o destino estiver numa interface diferente da de chegada, encaminha a trama apenas por essa interface. Se o destino estiver no mesmo segmento de chegada, descarta a trama por filtragem.",
    tags: ["conceito", "switch", "filtragem"]
  },
  {
    id: "q-5-5-007",
    chapterId: "5.5",
    question: "O que é flooding num switch?",
    answer:
      "É reenviar a trama por todas as interfaces exceto a interface por onde ela chegou. Ocorre quando o switch ainda não tem entrada para o MAC de destino.",
    tags: ["conceito", "switch", "flooding"]
  },
  {
    id: "q-5-5-008",
    chapterId: "5.5",
    question: "Prática: tabela vazia; A na interface 1 envia para A' na interface 4. O que o switch aprende e faz?",
    answer:
      "Aprende que A está na interface 1, porque viu o MAC de origem. Como ainda não sabe onde está A', faz flooding para todas as interfaces exceto a 1.",
    tags: ["prática", "switch", "auto-aprendizagem", "flooding"]
  },
  {
    id: "q-5-5-009",
    chapterId: "5.5",
    question: "Prática: depois de aprender A:1 e A':4, A' envia para A. O que acontece?",
    answer:
      "O switch aprende ou atualiza A':4 e consulta o destino A. Como A está na interface 1, encaminha seletivamente a trama apenas para a interface 1, sem flooding.",
    tags: ["prática", "switch", "auto-aprendizagem"]
  },
  {
    id: "q-5-5-010",
    chapterId: "5.5",
    question: "Distingue switch e router.",
    answer:
      "O switch opera no nível ligação, usa endereços MAC e aprende a tabela por auto-aprendizagem. O router opera no nível rede, usa endereços IP e calcula tabelas com protocolos de roteamento, ligando redes diferentes.",
    tags: ["comparação", "revisão", "switch", "router"]
  },
  {
    id: "q-5-6-001",
    chapterId: "5.6",
    question: "Distingue wireless e mobilidade.",
    answer:
      "Wireless é usar uma ligação sem fios, como rádio. Mobilidade é mudar o ponto de anexação à rede. Um dispositivo pode ser wireless sem ser móvel, como uma TV fixa ligada por WiFi.",
    tags: ["comparação", "wifi", "mobilidade"]
  },
  {
    id: "q-5-6-002",
    chapterId: "5.6",
    question: "Ordena do menos para o mais desafiante: mover desligado, mover dentro do mesmo AP, mover entre APs, mover entre redes mantendo ligações ativas.",
    answer:
      "Menos desafiante: mover-se desligado. Depois, mover-se dentro do mesmo AP. Depois, mover-se entre APs da mesma rede. Mais desafiante: mover-se entre redes de acesso mantendo ligações ativas.",
    tags: ["revisão", "mobilidade", "wifi"]
  },
  {
    id: "q-5-6-003",
    chapterId: "5.6",
    question: "Porque redes sem fios podem afetar o desempenho do TCP?",
    answer:
      "Erros de bit e perdas wireless podem ser interpretados pelo TCP como congestão, levando à redução da janela. Além disso, handovers podem introduzir atrasos e perdas temporárias.",
    tags: ["conceito", "wifi", "tcp"]
  },
  {
    id: "q-5-6-004",
    chapterId: "5.6",
    question: "Quais são os elementos principais de uma rede sem fios em modo infraestrutura?",
    answer:
      "Hosts sem fios, ligações sem fios, uma estação-base ou Access Point, e a infraestrutura cablada por trás. O AP funciona como relay entre os hosts sem fios e a rede cablada.",
    tags: ["conceito", "wifi", "ap"]
  },
  {
    id: "q-5-6-005",
    chapterId: "5.6",
    question: "Distingue modo infraestrutura e modo ad hoc em 802.11.",
    answer:
      "No modo infraestrutura, os hosts comunicam através de um AP dentro de um BSS. No modo ad hoc, não há AP; os hosts comunicam diretamente entre si.",
    tags: ["comparação", "wifi", "802.11"]
  },
  {
    id: "q-5-6-006",
    chapterId: "5.6",
    question: "O que é um BSS em WiFi?",
    answer:
      "BSS, ou Basic Service Set, é a célula 802.11. Em modo infraestrutura inclui o AP e os hosts sem fios associados a esse AP.",
    tags: ["conceito", "wifi", "bss"]
  },
  {
    id: "q-5-6-007",
    chapterId: "5.6",
    question: "O que é o problema do nó oculto?",
    answer:
      "Acontece quando dois emissores não se ouvem entre si, por distância ou obstáculos, mas ambos interferem no mesmo recetor. Cada um pensa que o canal está livre, embora a transmissão colida no recetor.",
    tags: ["conceito", "wifi", "nó-oculto"]
  },
  {
    id: "q-5-6-008",
    chapterId: "5.6",
    question: "Porque WiFi usa CSMA/CA em vez de CSMA/CD?",
    answer:
      "Porque em wireless é difícil detetar colisões enquanto se transmite e o nó oculto pode tornar colisões invisíveis ao emissor. Por isso o 802.11 tenta evitar colisões, usando backoff, ACKs e, opcionalmente, RTS/CTS.",
    tags: ["comparação", "wifi", "csma-ca", "csma-cd"]
  },
  {
    id: "q-5-6-009",
    chapterId: "5.6",
    question: "Como funciona o CSMA/CA no emissor 802.11?",
    answer:
      "Se o canal está livre durante DIFS, transmite a trama. Se está ocupado, escolhe um backoff aleatório que diminui enquanto o canal está livre. Se não receber ACK, aumenta o intervalo de backoff e tenta novamente.",
    tags: ["conceito", "wifi", "csma-ca", "backoff"]
  },
  {
    id: "q-5-6-010",
    chapterId: "5.6",
    question: "Porque o ACK é importante em 802.11?",
    answer:
      "Como o emissor não deteta colisões de forma fiável durante a transmissão, precisa de confirmação explícita. O recetor envia ACK após SIFS se recebeu corretamente a trama.",
    tags: ["conceito", "wifi", "ack"]
  },
  {
    id: "q-5-6-011",
    chapterId: "5.6",
    question: "Como RTS/CTS reduz colisões em WiFi?",
    answer:
      "O emissor envia RTS e o AP responde CTS em broadcast, ambos com a duração da transmissão. Os outros nós ouvem RTS/CTS e adiam transmissões, reduzindo colisões, especialmente no caso de nó oculto.",
    tags: ["conceito", "wifi", "rts-cts", "nó-oculto"]
  },
  {
    id: "q-5-6-012",
    chapterId: "5.6",
    question: "Qual é a sequência básica com reserva RTS/CTS?",
    answer:
      "A sequência é RTS, CTS, DATA e ACK. Os pacotes RTS e CTS são pequenos; mesmo que colidam, desperdiçam menos tempo do que uma trama de dados grande.",
    tags: ["prática", "wifi", "rts-cts"]
  },
  {
    id: "q-5-6-013",
    chapterId: "5.6",
    question: "Que passos faz um host para entrar numa rede WiFi?",
    answer:
      "Escuta beacon frames com SSID e MAC do AP, escolhe e associa-se a um AP, autentica-se, negocia segurança quando aplicável e normalmente usa DHCP para obter um IP na sub-rede do AP.",
    tags: ["conceito", "wifi", "associação", "dhcp"]
  },
  {
    id: "q-5-6-014",
    chapterId: "5.6",
    question: "Porque WPA3 é preferível a WPA2?",
    answer:
      "WPA3 é mais recente e melhora a proteção contra ataques de adivinhação offline da password. Também dá melhor confidencialidade individual entre cada cliente e o AP.",
    tags: ["conceito", "wifi", "wpa3"]
  },
  {
    id: "q-5-7-001",
    chapterId: "5.7",
    question: "Que problemas aparecem numa LAN comutada grande com um único domínio de broadcast?",
    answer:
      "Todo o tráfego de broadcast, como ARP e DHCP, atravessa a LAN inteira. Isto prejudica escalabilidade, eficiência, segurança e privacidade, porque muitos hosts recebem tráfego que não lhes interessa.",
    tags: ["conceito", "vlan", "broadcast"]
  },
  {
    id: "q-5-7-002",
    chapterId: "5.7",
    question: "O que é uma VLAN?",
    answer:
      "VLAN significa Virtual Local Area Network. É uma forma de configurar switches para criar várias LANs virtuais isoladas sobre a mesma infraestrutura física.",
    tags: ["conceito", "vlan"]
  },
  {
    id: "q-5-7-003",
    chapterId: "5.7",
    question: "Como funciona uma VLAN baseada em portos?",
    answer:
      "Os portos do switch são agrupados por configuração. Por exemplo, portos 1-8 podem pertencer à VLAN FD e portos 9-15 à VLAN ECATI, fazendo o mesmo switch físico comportar-se como vários switches virtuais.",
    tags: ["conceito", "vlan", "portos"]
  },
  {
    id: "q-5-7-004",
    chapterId: "5.7",
    question: "Que vantagens administrativas dão as VLANs?",
    answer:
      "Permitem separar redes logicamente sem depender apenas da localização física. Um utilizador pode mudar de gabinete e continuar na mesma VLAN lógica, desde que o porto novo seja configurado para essa VLAN.",
    tags: ["conceito", "vlan"]
  },
  {
    id: "q-5-7-005",
    chapterId: "5.7",
    question: "Porque duas VLANs diferentes precisam de roteamento para comunicar?",
    answer:
      "Porque VLANs diferentes comportam-se como LANs separadas. Uma trama de uma VLAN não é simplesmente entregue noutra; para comunicação entre redes lógicas diferentes é necessário um router ou função de camada 3.",
    tags: ["conceito", "vlan", "router"]
  },
  {
    id: "q-5-7-006",
    chapterId: "5.7",
    question: "Prática: host A está na VLAN 10 e host B na VLAN 20 no mesmo switch. Podem comunicar diretamente por comutação de camada 2?",
    answer:
      "Não. Como estão em VLANs diferentes, estão em LANs lógicas distintas. Precisam de roteamento inter-VLAN, mesmo que estejam ligados fisicamente ao mesmo switch.",
    tags: ["prática", "vlan", "roteamento"]
  },
  {
    id: "q-5-7-007",
    chapterId: "5.7",
    question: "O que é um porto trunk?",
    answer:
      "É um porto que transporta tráfego de várias VLANs entre switches. É necessário quando as mesmas VLANs se estendem por múltiplos switches físicos.",
    tags: ["conceito", "vlan", "trunk"]
  },
  {
    id: "q-5-7-008",
    chapterId: "5.7",
    question: "Para que serve o 802.1Q?",
    answer:
      "Serve para marcar tramas que atravessam trunks com informação da VLAN a que pertencem. O 802.1Q insere uma tag na trama Ethernet e permite que switches preservem a separação entre VLANs.",
    tags: ["conceito", "vlan", "802.1q"]
  },
  {
    id: "q-5-7-009",
    chapterId: "5.7",
    question: "Que campos principais são adicionados pela tag 802.1Q?",
    answer:
      "A tag inclui o identificador do protocolo de tagging, com valor 81-00, e a Tag Control Information, que inclui 12 bits de VLAN ID e 3 bits de prioridade. Como a trama muda, o CRC é recalculado.",
    tags: ["conceito", "vlan", "802.1q", "crc"]
  },
  {
    id: "q-5-7-010",
    chapterId: "5.7",
    question: "Onde é inserida a tag 802.1Q numa trama Ethernet?",
    answer:
      "É inserida entre o endereço MAC de origem e o campo Tipo. A trama deixa de ser uma Ethernet básica nesse troço trunk e passa a transportar o identificador da VLAN.",
    tags: ["prática", "vlan", "802.1q", "ethernet"]
  },
  {
    id: "q-5-7-011",
    chapterId: "5.7",
    question: "O que é EVPN/VXLAN no contexto dos apontamentos?",
    answer:
      "É uma forma de ligar redes Ethernet de nível 2 através de uma infraestrutura IP de nível 3. As tramas Ethernet são encapsuladas dentro de datagramas IP, criando um túnel entre localizações.",
    tags: ["conceito", "vlan", "evpn", "vxlan", "tunelamento"]
  },
  {
    id: "q-5-7-012",
    chapterId: "5.7",
    question: "Compara VLAN comum, trunk 802.1Q e EVPN/VXLAN.",
    answer:
      "Uma VLAN separa logicamente hosts numa infraestrutura local. Um trunk 802.1Q transporta várias VLANs entre switches próximos. EVPN/VXLAN estende redes de nível 2 por cima de IP, permitindo ligar LANs distantes.",
    tags: ["comparação", "vlan", "802.1q", "evpn", "vxlan"]
  }
];
