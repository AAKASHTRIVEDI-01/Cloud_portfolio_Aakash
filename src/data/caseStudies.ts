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
  problemPoints: string[];
  solutionPoints: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'enterprise-infra',
    title: 'Enterprise Azure Infrastructure',
    shortTitle: 'Enterprise Azure Infrastructure',
    oneLiner: 'Secure & highly available Azure multi-tier platform',
    tags: ['Hub & Spoke', 'WAF', 'App Gateway', 'Key Vault', 'Zero-Trust'],
    icon: 'Network',
    description:
      'Engineered an enterprise-grade Azure environment prioritizing network segmentation, perimeter security, and disaster recovery.',
    keyTechnologies: [
      'Azure VNet Peering',
      'NSG & UDR',
      'Azure Firewall',
      'Application Gateway / WAF',
      'Azure Key Vault',
      'Azure Monitor & KQL',
      'Recovery Services / ASR',
      'Microsoft Entra ID (RBAC)',
    ],
    whatIBuilt: [
      'Hub-and-spoke VNet topology with centralized firewall egress',
      'Isolated web, application, and database subnets with strict NSGs',
      'Layer 7 WAF protection against OWASP Top 10 vulnerabilities',
      'Centralized Log Analytics workspace with real-time alerting',
      'Multi-region backup and Azure Site Recovery (ASR) failover plan',
      'Zero-Trust RBAC and Key Vault access policies for all credentials',
    ],
    focus: ['Cloud Architecture', 'Networking', 'Security', 'HA/DR'],
    problem:
      'Workloads lacked network tier isolation, exposed unmonitored egress points, and had no automated disaster recovery strategy.',
    solution:
      'Designed a hub-and-spoke VNet with Azure Firewall egress, WAF inspection, Key Vault secrets protection, and automated ASR backup.',
    problemPoints: [
      'Lack of network segmentation between web, application, and data tiers',
      'Uncontrolled direct public IP internet exposure without centralized egress',
      'Absence of centralized secrets rotation and strict least-privilege RBAC',
      'Missing cross-region business continuity and automated failover strategy',
    ],
    solutionPoints: [
      'Deployed Hub-and-Spoke topology with Azure Firewall for centralized egress filtering',
      'Implemented Application Gateway with WAF to inspect and terminate external HTTPS traffic',
      'Enforced Zero-Trust RBAC and stored all application credentials in Azure Key Vault',
      'Configured Azure Backup & Site Recovery (ASR) with centralized Azure Monitor logging',
    ],
  },
  {
    id: 'iac-cicd',
    title: 'Azure Infrastructure as Code & CI/CD',
    shortTitle: 'Azure IaC & CI/CD',
    oneLiner: 'Automated cloud deployment platform using Terraform & GitHub Actions',
    tags: ['Terraform', 'GitHub Actions', 'IaC', 'OIDC', 'GitOps'],
    icon: 'GitBranch',
    description:
      'Built a production-grade automated infrastructure deployment pipeline enabling repeatable, version-controlled cloud releases.',
    keyTechnologies: [
      'Terraform (HCL)',
      'GitHub Actions',
      'Azure Key Vault',
      'Azure Blob (Remote State)',
      'OIDC Authentication',
      'Az CLI & PowerShell',
      'Branch Protection & GitOps',
    ],
    whatIBuilt: [
      'Reusable, modular Terraform components for VNets, compute, and security',
      'Remote state storage in Azure Blob with lease-based state locking',
      'Multi-stage automated pipelines for Dev, Staging, and Production environments',
      'Automated pull request validation with `terraform plan` checks',
      'Secretless authentication via Azure OpenID Connect (OIDC) federation',
      'Immutable infrastructure rollback and drift detection protocols',
    ],
    focus: ['Terraform', 'IaC', 'Automation', 'CI/CD'],
    problem:
      'Manual provisioning in Azure Portal caused configuration drift, inconsistent environments, and insecure credential handling.',
    solution:
      'Engineered modular Terraform with remote state locking and GitHub Actions CI/CD with secretless OIDC authentication.',
    problemPoints: [
      'Manual Azure portal deployments led to configuration drift across environments',
      'No state locking or change audit trail for collaborative infrastructure updates',
      'High security risk of hardcoded, long-lived service principal credentials in CI/CD',
      'Prolonged deployment cycles and slow rollback capabilities for broken releases',
    ],
    solutionPoints: [
      'Packaged all infrastructure into reusable, declarative Terraform modules',
      'Established remote backend in Azure Storage with automated state lease locking',
      'Integrated GitHub Actions with OIDC for ephemeral, secretless authentication',
      'Automated `terraform plan` on pull requests with required peer review gates',
    ],
  },
  {
    id: 'aks-platform',
    title: 'Azure AKS Cloud-Native Platform',
    shortTitle: 'Azure AKS Platform',
    oneLiner: 'Containerized microservices platform on Azure Kubernetes Service',
    tags: ['Docker', 'AKS', 'Kubernetes', 'ACR', 'Microservices'],
    icon: 'Boxes',
    description:
      'Designed and deployed an orchestrated container platform on Azure Kubernetes Service with automated scaling and monitoring.',
    keyTechnologies: [
      'Azure Kubernetes Service (AKS)',
      'Docker Containerization',
      'Azure Container Registry (ACR)',
      'Application Gateway Ingress (AGIC)',
      'Kubernetes Deployments & Services',
      'Azure Monitor Container Insights',
      'GitHub Actions CI/CD',
    ],
    whatIBuilt: [
      'Optimized multi-stage Docker container builds for minimal image footprint',
      'Private Azure Container Registry with vulnerability scanning and RBAC',
      'Managed AKS cluster with auto-scaling node pools and health probes',
      'Application Gateway Ingress Controller (AGIC) with automated TLS certificates',
      'Automated end-to-end container build, push, and rolling deployment pipeline',
      'Container Insights telemetry tracking CPU, memory, and pod restart health',
    ],
    focus: ['DevOps', 'Docker', 'Kubernetes', 'AKS', 'CI/CD'],
    problem:
      'Monolithic application suffered from deployment downtime, resource bottlenecks, and lack of horizontal scaling during traffic spikes.',
    solution:
      'Containerized the application using Docker and deployed to AKS with ingress-based routing, auto-scaling, and telemetry.',
    problemPoints: [
      'Monolithic VM architecture required scheduled downtime for application updates',
      'Lack of automated horizontal scaling during sudden production traffic spikes',
      'Absence of centralized container image vulnerability scanning and governance',
      'Manual deployments with no canary or rolling release verification',
    ],
    solutionPoints: [
      'Containerized workloads with lightweight, multi-stage Dockerfiles',
      'Configured managed AKS cluster with Horizontal Pod Autoscaler (HPA)',
      'Integrated Azure Container Registry (ACR) with automated security scanning',
      'Deployed AGIC ingress for zero-downtime rolling updates and SSL offloading',
    ],
  },
];
