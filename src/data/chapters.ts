import chapter41 from "../../4.1_camada_rede.md?raw";
import chapter42 from "../../4.2_dentro_de_um_router.md?raw";
import chapter43 from "../../4.3_datagrama_ip.md?raw";
import chapter44 from "../../4.4_enderecamento_ipv4.md?raw";
import chapter45 from "../../4.5_dhcp.md?raw";
import chapter46 from "../../4.6_nat.md?raw";
import chapter47 from "../../4.7_ipv6.md?raw";
import chapter48 from "../../4.8_algoritmos_roteamento.md?raw";
import chapter49 from "../../4.9_roteamento_internet.md?raw";
import chapter51 from "../../5.1_introducao_servicos.md?raw";
import chapter52 from "../../5.2_acesso_multiplo.md?raw";
import chapter53 from "../../5.3_enderecamento_arp.md?raw";
import chapter54 from "../../5.4_ethernet.md?raw";
import chapter55 from "../../5.5_switches.md?raw";
import chapter56 from "../../5.6_wifi.md?raw";
import chapter57 from "../../5.7_vlans.md?raw";

export type ChapterId =
  | "4.1"
  | "4.2"
  | "4.3"
  | "4.4"
  | "4.5"
  | "4.6"
  | "4.7"
  | "4.8"
  | "4.9"
  | "5.1"
  | "5.2"
  | "5.3"
  | "5.4"
  | "5.5"
  | "5.6"
  | "5.7";

export type AulaId = "4" | "5";

export type Chapter = {
  id: ChapterId;
  aula: AulaId;
  title: string;
  summary: string;
  filename: string;
  content: string;
};

export const chapters: Chapter[] = [
  {
    id: "4.1",
    aula: "4",
    title: "Introdução ao Nível de Rede",
    summary: "Funções, datagramas, encaminhamento, roteamento, planos e best effort.",
    filename: "4.1_camada_rede.md",
    content: chapter41
  },
  {
    id: "4.2",
    aula: "4",
    title: "Dentro de um Router",
    summary: "Portos, tecido de comutação, filas, buffers, escalonamento e LPM.",
    filename: "4.2_dentro_de_um_router.md",
    content: chapter42
  },
  {
    id: "4.3",
    aula: "4",
    title: "Datagrama IP e Fragmentação",
    summary: "Formato IPv4, ICMP, TTL, checksum, MTU e fragmentos.",
    filename: "4.3_datagrama_ip.md",
    content: chapter43
  },
  {
    id: "4.4",
    aula: "4",
    title: "Endereçamento IPv4",
    summary: "Interfaces, sub-redes, máscaras, CIDR, rede, broadcast e agregação.",
    filename: "4.4_enderecamento_ipv4.md",
    content: chapter44
  },
  {
    id: "4.5",
    aula: "4",
    title: "DHCP",
    summary: "Configuração automática, mensagens Discover/Offer/Request/ACK e leases.",
    filename: "4.5_dhcp.md",
    content: chapter45
  },
  {
    id: "4.6",
    aula: "4",
    title: "NAT",
    summary: "Tradução com portos, tabela NAT, vantagens e problemas.",
    filename: "4.6_nat.md",
    content: chapter46
  },
  {
    id: "4.7",
    aula: "4",
    title: "IPv6 e Tunelamento",
    summary: "Endereços de 128 bits, cabeçalho IPv6, AAAA e IPv6 sobre IPv4.",
    filename: "4.7_ipv6.md",
    content: chapter47
  },
  {
    id: "4.8",
    aula: "4",
    title: "Algoritmos de Roteamento",
    summary: "Grafo, Link State, Dijkstra, Distance Vector e Bellman-Ford.",
    filename: "4.8_algoritmos_roteamento.md",
    content: chapter48
  },
  {
    id: "4.9",
    aula: "4",
    title: "Roteamento na Internet",
    summary: "AS, intra-AS/inter-AS, OSPF, BGP, políticas e hot-potato.",
    filename: "4.9_roteamento_internet.md",
    content: chapter49
  },
  {
    id: "5.1",
    aula: "5",
    title: "Introdução e Serviços do Nível Ligação",
    summary: "Nós, ligações, tramas, adaptadores e serviços do nível ligação.",
    filename: "5.1_introducao_servicos.md",
    content: chapter51
  },
  {
    id: "5.2",
    aula: "5",
    title: "Protocolos de Acesso Múltiplo",
    summary: "TDMA, FDMA, acesso aleatório, CSMA/CD, polling e token passing.",
    filename: "5.2_acesso_multiplo.md",
    content: chapter52
  },
  {
    id: "5.3",
    aula: "5",
    title: "Endereçamento MAC e ARP",
    summary: "MAC vs IP, ARP, tabela ARP e envio para outra rede.",
    filename: "5.3_enderecamento_arp.md",
    content: chapter53
  },
  {
    id: "5.4",
    aula: "5",
    title: "Ethernet",
    summary: "Topologia, trama Ethernet, CRC, serviço sem ligação e CSMA/CD.",
    filename: "5.4_ethernet.md",
    content: chapter54
  },
  {
    id: "5.5",
    aula: "5",
    title: "Switches Ethernet",
    summary: "Transparência, auto-aprendizagem, flooding, buffers e routers vs switches.",
    filename: "5.5_switches.md",
    content: chapter55
  },
  {
    id: "5.6",
    aula: "5",
    title: "Redes Sem Fios e WiFi",
    summary: "Mobilidade, 802.11, nó oculto, CSMA/CA, RTS/CTS e WPA.",
    filename: "5.6_wifi.md",
    content: chapter56
  },
  {
    id: "5.7",
    aula: "5",
    title: "VLANs",
    summary: "Motivação, VLAN por portos, trunk, 802.1Q e EVPN/VXLAN.",
    filename: "5.7_vlans.md",
    content: chapter57
  }
];

export const chapterById = new Map(chapters.map((chapter) => [chapter.id, chapter]));
