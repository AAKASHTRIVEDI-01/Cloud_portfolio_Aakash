export interface CaseStudy {
  id: string;
  title: string;
  shortTitle: string;
  oneLiner: string;
  tags: string[];
  icon: string;
  description: string;
  keyTechnologies: string[];
  whatIBuilt: string[];
  focus: string[];
  problem: string;
  solution: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'enterprise-infra',
    title: 'Enterprise Azure Infrastructure',
    shortTitle: 'Enterprise Azure Infrastructure',
    oneLiner: 'Secure & highly available Azure enterprise platform',
    tags: ['VNet', 'NSG', 'App Gateway', 'Key Vault'],
    icon: 'Network',
    description:
      'Designed a secure and highly available enterprise Azure infrastructure with a focus on networking, security, monitoring, and disaster recovery.',
    keyTechnologies: [
      'Azure VNet',
      'NSG',
      'Azure Firewall',
      'Application Gateway/WAF',
      'VMs',
      'Storage',
      'Key Vault',
      'Azure Monitor',
      'Backup/ASR',
      'RBAC',
    ],
    whatIBuilt: [
      'Hub-and-spoke network architecture',
      'Secure application and database tiers',
      'WAF and controlled internet access',
      'Centralized monitoring and logging',
      'Backup and disaster recovery strategy',
      'RBAC and security controls',
    ],
    focus: ['Cloud Architecture', 'Networking', 'Security', 'HA/DR'],
    problem:
      'The organization needed a secure, production-grade Azure environment that could support multiple workloads while isolating network tiers, controlling internet exposure, and meeting compliance requirements — all with disaster recovery built in.',
    solution:
      'Implemented a hub-spoke network topology with Azure Firewall for centralized egress, Application Gateway with WAF for web-tier protection, and segmented subnets with NSGs for defense-in-depth. Key Vault was used for secrets management, RBAC for least-privilege access, and Azure Backup + ASR for a full DR strategy — all monitored through Azure Monitor and Log Analytics.',
  },
  {
    id: 'iac-cicd',
    title: 'Azure Infrastructure as Code & CI/CD',
    shortTitle: 'Azure IaC & CI/CD',
    oneLiner: 'Automated infrastructure deployment using Terraform',
    tags: ['Terraform', 'GitHub Actions', 'CI/CD'],
    icon: 'GitBranch',
    description:
      'Built an automated Azure infrastructure deployment platform using Terraform and CI/CD, enabling repeatable and controlled cloud deployments.',
    keyTechnologies: [
      'Terraform',
      'Azure',
      'GitHub',
      'GitHub Actions',
      'Azure Key Vault',
      'Azure Storage',
      'CI/CD',
    ],
    whatIBuilt: [
      'Reusable Terraform modules',
      'Remote Terraform state',
      'Dev/Test/Production environments',
      'Automated Terraform plan & deployment',
      'Git-based infrastructure workflow',
      'Secure secrets and authentication',
    ],
    focus: ['Terraform', 'IaC', 'Automation', 'CI/CD'],
    problem:
      'Manual Azure provisioning was slow, error-prone, and inconsistent across environments. The team needed a way to deploy infrastructure that was repeatable, version-controlled, and safe — without exposing secrets in pipelines.',
    solution:
      'Created modular Terraform code with remote state stored in Azure Storage. GitHub Actions workflows were configured to run plan/apply automatically on pull requests and merges, with separate Dev/Test/Prod environments. Secrets were managed through Azure Key Vault with OIDC federation — no long-lived credentials stored in GitHub.',
  },
  {
    id: 'aks-platform',
    title: 'Azure AKS Cloud-Native Platform',
    shortTitle: 'Azure AKS Platform',
    oneLiner: 'Containerized cloud-native application on AKS',
    tags: ['Docker', 'AKS', 'Kubernetes'],
    icon: 'Boxes',
    description:
      'Designed and deployed a containerized application platform on Azure Kubernetes Service with automated deployment, scaling, and monitoring.',
    keyTechnologies: [
      'AKS',
      'Docker',
      'Azure Container Registry',
      'Kubernetes',
      'GitHub Actions',
      'Application Gateway',
      'Azure Monitor',
    ],
    whatIBuilt: [
      'Containerized application using Docker',
      'Private container image management with ACR',
      'Kubernetes deployments and services',
      'Ingress-based application access',
      'Automated CI/CD pipeline',
      'Application scaling and monitoring',
    ],
    focus: ['DevOps', 'Docker', 'Kubernetes', 'AKS', 'CI/CD'],
    problem:
      'The team needed to run a production web application with automated deployments, horizontal scaling, and health monitoring — but had no container orchestration platform and no CI/CD pipeline to get code from commit to cluster.',
    solution:
      'Built Docker images from source, pushed them to Azure Container Registry, and deployed to AKS using Kubernetes manifests with Deployments, Services, and Ingress. Application Gateway provided ingress and TLS termination. GitHub Actions handled the full pipeline — build, push, deploy — and Azure Monitor tracked pod health, scaling, and application metrics.',
  },
];
