/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Consultant {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface Competency {
  id: string;
  title: string;
  description: string;
  tags: string[];
  icon: string;
}

export const CONSULTANTS: Consultant[] = [
  {
    id: 'marcus',
    name: 'Marcus Thorne',
    role: 'Chief Strategist',
    description: 'Expert in distributed systems and autonomous agent orchestration.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCS3PCL7tTRmmjOo8O-t65zfW3qo2tXYMnlakKUb4T7PjtVW1tuZIcFBpf5byY_PTTzQP3SabRtcFJ4o8fH5Fw9ARcvaxQZEBzO7P0LzvPzhKXum_yx4AAUu13W5PrwA3iVnDdqdu1NDjYxrWWgY6_1dF90gBqognUIsCmt0E0La5zZaiCN-7yDVsjCQri46W04Oiw5vdlvNf13OhElvc23D2zsWAx4Ltnw_swjIQvuY5cs5fPQsV0ZUZ0-dCPMqvvI_aGshErYtABC'
  },
  {
    id: 'elena',
    name: 'Dr. Elena Voss',
    role: 'Head of AI Integrity',
    description: 'Specializing in cryptographic verification of large language models.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBkCcyEnzGOYE1B7HjEX02VQhJErT6aqsd9D88ZCrj8xt_yUVw8A-orWRa-C1MT4JKod8Z7-82wG-6VpurbPcHfA3XTyh0VfGHAZivV36zQW8w1fl0UDFzUGV7ZizdNHI8cC2erMomprbxHgmSJUOaoMBdQYFQFztHVSb5tukntWVxwbbNaLEDHwzGoqsNLLOWoOvtPl83x9nTDv1UH1Dzx7e1ABbv7C31GPu9djOrZcx2PKYMYEu_9MAJ9X-1hOHr7S95-vGTWd6K'
  },
  {
    id: 'julian',
    name: 'Julian Chen',
    role: 'Infrastructure Architect',
    description: 'Pioneer in agentic multi-cloud deployment and resilience protocols.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhn9TXEk-RYL5lmLUKJ7WBX0q_lr6hxkXzLNYrsA_ywW0uGjURkuClBiNBlz37YWDanV5Ei9AN90tG2C_vbfSLa28TqHftygH2vZvJVmkNtcpJVTCr2MtZiVoJmkRdFZGY6fRpy7QO85PsCYoWvCXXvIyjRn86NpZhD5j8OnRLyQGfzaVg68greWUVrJNV5x3DBLkdK703z-POIX7FLJ7SOoawN4Z49ZBRvh1zb1OxTYkwGsTqSAHFKup-DGgcqpYbWH5M7kOxq3eT'
  },
  {
    id: 'sarah',
    name: 'Sarah Khel',
    role: 'SecOps Lead',
    description: 'Expert in adversarial machine learning and enterprise threat neutralization.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABlbuOZJH5ecAPU2rmM2-9qe1Zr0KcNgQXxm2Txxlnc60Vu8ZhRFNgY5-fL5_YqffDVLA9XA__hYLdQOs06yJF5N6_xQCsn2A8ZmiS87jwh7TFGGZDw1MR7ZZC9Rnox1VmTNHlYMtXBmgRtwI_u2emeh52o0tog3iFqiFvGA0luEIZZBgEk5gXnRIIbT9t31PiGkmLEZ3Dr4W3EGOokgRuz7rBqNhYr54qnmYDh2S0f4_Qq89UP3ggwyt2fZiQpP10vFDLwOwjqEeU'
  }
];

export const COMPETENCIES: Competency[] = [
  {
    id: 'app-dev',
    title: 'Custom App Development',
    description: 'Greenfield projects built on sovereign infrastructure. We utilize agent-assisted CI/CD pipelines to achieve 3x industry standard deployment speeds.',
    icon: 'Rocket',
    tags: ['Cloud-Native Architecture', 'Multi-Tenant SaaS Engine', 'Real-Time Sync Protocols']
  },
  {
    id: 'legacy',
    title: 'Legacy Modernization',
    description: 'Systemic refactoring of monolithic architectures. Our agents map dependencies with 99.9% accuracy, ensuring seamless transitions.',
    icon: 'History',
    tags: ['Monolith Decoupling', 'Data Schema Migration', 'API Encapsulation']
  },
  {
    id: 'infra',
    title: 'Scalable Infrastructure',
    description: 'Elastic environments designed for agentic workloads. Automated scaling, self-healing nodes, and sovereign data governance.',
    icon: 'Hub',
    tags: ['Kubernetes Orchestration', 'Edge Computing Deployment', 'Zero-Trust Security']
  }
];
