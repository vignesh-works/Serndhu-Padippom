/* Serndhu Padippom — CA formulas & shortcuts.
   Last checked: 25 Oct 2026. Structure: level → subject → [title, body].
   Add a new topic by adding [`Title`, `Body`] to any subject below. */
window.CA_FORMULAS=[
{id:'F',name:'Foundation',note:'Foundation · Jan 2027 / May 2027 attempts (4 papers)',subs:[
{n:'Paper 1 · Accounting',items:[
['Accounting equation & capital',`Assets = Capital + Liabilities
Closing capital = Opening capital + Profit + Fresh capital − Drawings`],
['Depreciation',`SLM = (Cost − Residual value) / Useful life
WDV: Depreciation = Rate % × Opening book value
Profit/Loss on sale = Sale price − Book value on date of sale
Part year → pro-rata by months`],
['Profit · Markup · Margin',`COGS = Opening stock + Net purchases + Direct exp − Closing stock
Gross profit = Net sales − COGS
Net profit = GP + Other income − Indirect expenses
Shortcut: Margin % = Markup / (100 + Markup) · Markup % = Margin / (100 − Margin)`],
['Bank Reconciliation (BRS)',`Cash book (Dr) balance
+ Cheques issued, not presented
− Cheques deposited, not cleared
+ Bank credits not in cash book (interest, direct deposit)
− Bank debits not in cash book (charges, direct payment)
= Pass book balance
Overdraft-ah irundha ellaa signs-um reverse`],
['Bills of exchange',`Due date = Date of drawing + Term + 3 days of grace
Discount = Bill amount × Rate × Unexpired period / 12
Net proceeds = Bill amount − Discount`],
['Partnership – ratios, interest, goodwill',`Sacrificing ratio = Old − New · Gaining ratio = New − Old
Interest on capital = Capital × Rate × Time
Interest on drawings (equal amounts): every month → 6.5 (start) / 6 (mid) / 5.5 (end) months · every quarter → 7.5 / 6 / 4.5 months
Super profit = Average profit − Normal profit
Goodwill = Average profit × Years' purchase`],
['Incomplete records',`Profit = Closing capital − Opening capital + Drawings − Fresh capital
Credit sales = Closing debtors + Cash received + Discount + Returns + Bad debts − Opening debtors
Credit purchases = Closing creditors + Payments + Discount + Returns − Opening creditors`],
['Not-for-profit organisations',`Subscription for the year = Received + O/s at end + Advance at start − O/s at start − Advance at end
Consumption = Opening stock + Purchases − Closing stock
Capital fund = Assets − Liabilities
Receipts & Payments = cash basis · Income & Expenditure = accrual basis`],
['Company accounts',`Securities premium = Issue price − Face value
Capital reserve on re-issue = Forfeited amount − Discount allowed on re-issue
Bonus shares: from free reserves / securities premium / CRR (not revaluation reserve)
Redemption of preference shares: CRR = Nominal value redeemed − Fresh issue proceeds`]]},
{n:'Paper 2 · Business Laws',items:[
['Valid contract (S.10)',`Offer + Acceptance + Consideration + Competent parties + Free consent + Lawful object, not expressly declared void
Minor's agreement = void ab initio · Age of majority 18 (21 if guardian appointed)
Voidable: coercion S.15 · undue influence S.16 · fraud S.17 · misrepresentation S.18
Void: wagering S.30 · restraint of trade S.27 · bilateral mistake of fact S.20`],
['Breach & remedies (ICA)',`S.73: damages for loss that naturally arises; remote loss not payable
S.74: liquidated damages – reasonable compensation, not exceeding the stipulated sum
S.56: impossible act after contract = contract becomes void`],
['Sale of Goods Act 1930',`Condition (S.12) – breach → repudiate + damages · Warranty – breach → damages only
Implied conditions: title S.14 · description S.15 · quality/fitness S.16 · sample S.17
Implied warranties: quiet possession · freedom from encumbrance
Unpaid seller: lien · stoppage in transit · resale (S.46)`],
['Partnership Act 1932 · LLP Act 2008',`Partnership: min 2, max 50 · registration optional (S.58) · not a separate legal entity · partners' liability joint & several
LLP: min 2 partners, no maximum · separate legal entity · perpetual succession
LLP: at least 2 designated partners (1 resident in India) · LLP agreement filed within 30 days of incorporation`],
['Companies Act 2013 – basics',`Members: Private 2–200 · Public min 7 (no max) · OPC 1
Directors: Private min 2 · Public min 3 · OPC min 1 · Max 15
Commencement of business declaration: within 180 days of incorporation (S.10A)
Registered office: within 30 days of incorporation`],
['Negotiable Instruments Act 1881',`Promissory note S.4 · Bill of exchange S.5 · Cheque S.6
Cheque valid for 3 months from date
S.138 dishonour: notice within 30 days of dishonour info → drawer pays within 15 days → complaint within 1 month after that
Penalty: up to 2 years' imprisonment or fine up to twice the cheque amount, or both`]]},
{n:'Paper 3 · Quantitative Aptitude',items:[
['Indices & Logarithms',`a^m · a^n = a^(m+n) · a^m / a^n = a^(m−n) · (a^m)^n = a^(mn) · a⁰ = 1
log(mn) = log m + log n · log(m/n) = log m − log n
log mⁿ = n log m · log_b a = log a / log b · log_a a = 1 · log 1 = 0`],
['Quadratic equation',`ax² + bx + c = 0 → x = [−b ± √(b² − 4ac)] / 2a
Sum of roots = −b/a · Product = c/a
D = b² − 4ac: D > 0 real & distinct · D = 0 equal · D < 0 imaginary`],
['Mathematics of finance',`SI = PRT / 100 · A = P (1 + r/100)ⁿ · CI = A − P
Effective rate = (1 + i/m)^m − 1
FV of annuity = C [((1+i)ⁿ − 1) / i] · PV of annuity = C [(1 − (1+i)^−n) / i]
Annuity due = Ordinary annuity × (1 + i) · Perpetuity PV = C / i
Sinking fund = FV × i / ((1+i)ⁿ − 1)`],
['Permutation · Combination · Sets',`nPr = n! / (n−r)! · nCr = n! / [r!(n−r)!] · nCr = nC(n−r)
nCr + nC(r−1) = (n+1)Cr · Circular arrangement = (n−1)!
Alike items: n! / (p! q! r!)
n(A∪B) = n(A) + n(B) − n(A∩B) · Subsets = 2ⁿ · Proper subsets = 2ⁿ − 1`],
['AP · GP · Means',`AP: Tn = a + (n−1)d · Sn = n/2 [2a + (n−1)d]
GP: Tn = a r^(n−1) · Sn = a (rⁿ − 1)/(r − 1) (r > 1) · S∞ = a / (1 − r), |r| < 1
AM = (a+b)/2 · GM = √(ab) · HM = 2ab/(a+b) · GM² = AM × HM`],
['Calculus basics',`d/dx (xⁿ) = n xⁿ⁻¹ · (uv)' = uv' + vu' · (u/v)' = (vu' − uv') / v²
d/dx (eˣ) = eˣ · d/dx (log x) = 1/x
∫xⁿ dx = xⁿ⁺¹/(n+1) + C · ∫(1/x) dx = log x + C
Max/Min: f'(x) = 0 → f'' < 0 max · f'' > 0 min · MC = dC/dx · MR = dR/dx`],
['Logical reasoning – clock · calendar · direction',`Angle between hands = |30H − 5.5M|
Odd days: ordinary year 1 · leap year 2 · 100 yrs 5 · 200 yrs 3 · 300 yrs 1 · 400 yrs 0
Direction: shortest distance = √(x² + y²)`],
['Statistics – averages & dispersion',`Weighted mean = Σwx / Σw · Mode = 3 Median − 2 Mean
Median = L + [(N/2 − cf) / f] × h · Mode = L + [(f1 − f0) / (2f1 − f0 − f2)] × h
Quartile deviation = (Q3 − Q1)/2 · Coefficient = (Q3 − Q1)/(Q3 + Q1)
SD σ = √[Σx²/n − (x̄)²] · Variance = σ² · CV = σ / x̄ × 100
If y = a + bx then σy = |b| σx`],
['Probability · Distributions',`P(A∪B) = P(A) + P(B) − P(A∩B) · P(A|B) = P(A∩B) / P(B) · Independent: P(A∩B) = P(A) P(B)
E(X) = Σxp · Var(X) = E(X²) − [E(X)]²
Binomial: P(r) = nCr pʳ q^(n−r) · Mean np · Var npq
Poisson: P(r) = e^−m mʳ / r! · Mean = Var = m
Normal: Z = (X − μ)/σ · μ±1σ 68.27% · ±2σ 95.45% · ±3σ 99.73%`],
['Correlation & Regression',`Pearson r = [nΣxy − ΣxΣy] / √{[nΣx² − (Σx)²][nΣy² − (Σy)²]}
Spearman r = 1 − 6Σd² / [n(n² − 1)]
byx = r σy/σx · bxy = r σx/σy · r² = byx × bxy (r has same sign as b)
Regression lines meet at (x̄, ȳ)`],
['Index numbers',`Laspeyres = Σp1q0 / Σp0q0 × 100 · Paasche = Σp1q1 / Σp0q1 × 100
Fisher = √(Laspeyres × Paasche) · Marshall-Edgeworth = Σp1(q0+q1) / Σp0(q0+q1) × 100
Time reversal: P01 × P10 = 1 · Factor reversal: P01 × Q01 = Σp1q1 / Σp0q0 (Fisher satisfies both)
Real wage = Money wage / CPI × 100`],
['Maths shortcuts',`Rule of 72: doubling time ≈ 72 / r %
Successive change of a% and b% = a + b + ab/100 %
Same SP, x% gain and x% loss → net loss = x²/100 %
CI − SI for 2 years = P (r/100)²
Average speed for equal distances = 2xy / (x + y)`]]},
{n:'Paper 4 · Business Economics',items:[
['Elasticity',`Ed = % change in Qd / % change in P
|Ed| > 1 elastic · = 1 unitary · < 1 inelastic
Income elasticity > 0 normal · < 0 inferior · > 1 luxury
Cross elasticity > 0 substitutes · < 0 complements`],
['Revenue & cost',`TR = P × Q · AR = TR/Q (= Price) · MR = ΔTR/ΔQ
Shortcut: MR = P (1 − 1/|Ed|) → MR = 0 when |Ed| = 1
TC = TFC + TVC · AC = AFC + AVC · MC = ΔTC/ΔQ · Profit = TR − TC`],
['Production & market equilibrium',`AP = TP/L · MP = ΔTP/ΔL · TP maximum when MP = 0
Profit maximisation: MR = MC, MC cutting MR from below
Perfect competition: P = AR = MR = MC · Monopoly: P > MR
Shut down if P < AVC · Break-even when P = AC`],
['National income',`GDP (expenditure) = C + I + G + (X − M)
GNP = GDP + Net factor income from abroad · NNP = GNP − Depreciation
Net indirect taxes = Indirect taxes − Subsidies
NNP at factor cost (National income) = NNP at market price − Net indirect taxes`],
['Multiplier & consumption',`MPC + MPS = 1 · APC + APS = 1
Investment multiplier k = 1 / (1 − MPC) = 1 / MPS
Money multiplier = 1 / Reserve ratio (CRR)
Quantity theory: MV = PT`],
['Public finance – deficits',`Revenue deficit = Revenue expenditure − Revenue receipts
Fiscal deficit = Total expenditure − (Revenue receipts + Non-debt capital receipts)
Primary deficit = Fiscal deficit − Interest payments`]]}
]},
{id:'G1',name:'Inter · Group 1',note:'Income-tax: Act 1961, AY 2026-27 (Jan 2027 attempt). May 2027 onwards: Income-tax Act 2025 – section numbers maarum. GST: rates as per 22 Sep 2025 change.',subs:[
{n:'Paper 1 · Advanced Accounting',items:[
['Goodwill valuation',`Normal profit = Capital employed × Normal rate of return
Super profit = Average profit − Normal profit
Goodwill = Super profit × Years' purchase
Capitalisation: Capitalised value = Average profit × 100 / NRR · Goodwill = Capitalised value − Net assets
Capitalisation of super profit = Super profit × 100 / NRR`],
['Reconstitution – admission · retirement · death',`Sacrificing = Old − New · Gaining = New − Old
Firm's total capital = New partner's capital × Reciprocal of his share
Hidden goodwill = Firm's total capital − Total adjusted capitals (incl. new partner)
Death: Share of profit till death = Last year profit × Months/12 × Share`],
['Dissolution of firm',`Garner v. Murray: insolvent partner's deficiency borne by solvent partners in ratio of their last agreed capitals
Piecemeal distribution: highest relative capital (Capital / Profit share) method
Loss on realisation is shared in profit-sharing ratio`],
['Buy-back of shares',`Max buy-back = 25% of (Paid-up capital + Free reserves) in a year; equity shares 25% of paid-up equity capital
Board resolution up to 10% · Special resolution up to 25%
Post buy-back Debt : Equity ≤ 2 : 1
CRR = Nominal value of shares bought back (out of free reserves / premium)`],
['Amalgamation – purchase consideration',`Net payment method = Shares + Cash + Securities paid to transferor's shareholders
Net assets method = Assets taken over − Liabilities taken over
Pooling of interests: reserves carried forward · Purchase: statutory reserves only`],
['AS 2 – Inventories',`Value at lower of Cost and Net Realisable Value
NRV = Estimated selling price − Cost of completion − Selling costs`],
['AS 3 – Cash Flow Statement',`Net increase in cash = CFO + CFI + CFF
Indirect method: CFO = Net profit before tax + Non-cash & non-operating items ± Working capital changes − Tax paid`],
['AS 20 – Earnings per share',`Basic EPS = (Net profit − Preference dividend) / Weighted average equity shares
TERP = (FV before rights × Shares before + Issue price × Rights shares) / (Shares before + Rights shares)
Adjustment factor = FV before rights / TERP · Bonus issue adjusted retrospectively`],
['AS 16 · AS 22',`AS 16: Capitalisation rate = Σ Interest on general borrowings / Σ Weighted avg general borrowings
Specific borrowing: Actual interest − Income on temporary investment
AS 22: Deferred tax = Timing difference × Tax rate (DTA only with virtual certainty if losses)`]]},
{n:'Paper 2 · Corporate & Other Laws',items:[
['General meetings',`AGM: within 6 months of FY end · gap between two AGMs ≤ 15 months · first AGM within 9 months of FY end
Notice: 21 clear days · shorter notice – AGM: all members entitled to vote · other GM: 95% of voting power (members holding)
Quorum S.103: Public – 5 (up to 1,000 members) · 15 (1,001–5,000) · 30 (above 5,000) · Private – 2 present`],
['Resolutions & Board meetings',`Ordinary: simple majority · Special: votes in favour ≥ 3 × votes against
Board: min 4 meetings a year · gap ≤ 120 days · Quorum = 1/3 of strength or 2 directors, whichever is higher`],
['Directors – key numbers',`Min: Public 3 · Private 2 · OPC 1 · Max 15 (more by special resolution)
Resident director: at least 1, stays 182 days or more in India in the year
Max directorships: 20 companies (public companies max 10)
Women director: listed & large public companies · Independent directors: listed public 1/3rd of Board`],
['Managerial remuneration (S.197)',`Overall ceiling: 11% of net profit
MD / WTD / Manager: 5% (single) · 10% (all together)
Other directors: 1% (if MD/manager exists) · 3% (if none)`],
['Auditor – appointment & tenure (S.139)',`First auditor: Board within 30 days of incorporation (else GM in 90 days)
Casual vacancy: Board within 30 days · Shareholders' approval within 3 months
Rotation: Individual 5 yrs (one term) · Firm 2 terms of 5 yrs · Cooling-off 5 years
Applies to listed companies & specified classes`],
['Share capital & dividend',`Unpaid dividend: transfer to Unpaid Dividend A/c within 7 days of 30-day period
Unclaimed for 7 years → IEPF
Dividend only out of profits; declared in AGM, paid within 30 days`],
['Interpretation of statutes',`Literal rule · Golden rule · Mischief rule (Heydon)
Ejusdem generis · Noscitur a sociis · Expressio unius est exclusio alterius`]]},
{n:'Paper 3 · Taxation – Income-tax',items:[
['Residential status (Individual)',`Resident if: ≥ 182 days in PY, OR ≥ 60 days in PY and ≥ 365 days in 4 preceding years
Citizen / PIO visiting India: 60 days → 182 days
Deemed resident: citizen, India income > ₹15 lakh, not liable to tax elsewhere
ROR = Resident AND (resident in ≥ 2 of 10 prev. years AND ≥ 730 days in 7 prev. years) else RNOR`],
['Slab rates – new regime (default)',`FY 2025-26: 0–4L nil · 4–8L 5% · 8–12L 10% · 12–16L 15% · 16–20L 20% · 20–24L 25% · above 24L 30%
Rebate u/s 87A: income up to ₹12 lakh → up to ₹60,000
Standard deduction ₹75,000 · Cess 4%`],
['Slab rates – old regime',`Below 60: 0–2.5L nil · 2.5–5L 5% · 5–10L 20% · above 10L 30%
Senior (60–80): exemption ₹3L · Super senior (80+): ₹5L
Rebate u/s 87A: income up to ₹5 lakh → up to ₹12,500 · Standard deduction ₹50,000
Surcharge: > 50L 10% · > 1Cr 15% · > 2Cr 25% · > 5Cr 37% (new regime capped at 25%)`],
['HRA exemption (old regime)',`Least of:
(a) Actual HRA received
(b) Rent paid − 10% of salary
(c) 50% of salary (Delhi, Mumbai, Kolkata, Chennai) or 40% (others)
Salary = Basic + DA (if forming part) + Commission on turnover`],
['Income from house property',`NAV = Higher of (Municipal value, Fair rent) limited by Standard rent − (Municipal taxes paid)
Income = NAV − 30% standard deduction − Interest on loan
Self-occupied: interest deduction max ₹2,00,000`],
['Deductions – Chapter VI-A (old regime)',`80C + 80CCC + 80CCD(1): ₹1,50,000 · 80CCD(1B): ₹50,000 extra
80D: ₹25,000 (₹50,000 senior) for self/family + same for parents · 80TTA ₹10,000 · 80TTB ₹50,000 (senior)
Employer NPS 80CCD(2): 10% of salary (old) · 14% (new regime)`],
['Capital gains',`Holding period (long-term): listed shares 12 months · unlisted shares & immovable property 24 months
STCG s.111A (listed equity, STT paid) 20% · LTCG s.112A 12.5% above ₹1.25 lakh · LTCG s.112 12.5% (no indexation)
Indexed cost = Cost × CII (transfer year) / CII (acquisition year) · CII FY 2025-26 = 376
s.54EC: up to ₹50 lakh in specified bonds within 6 months`],
['PGBP – depreciation & presumptive',`Block rates: Residential building 5% · Other building 10% · Furniture 10% · Plant & Machinery 15% · Computers 40% · Intangibles 25%
44AD: 8% (6% digital) turnover ≤ ₹2 cr (₹3 cr if cash ≤ 5%)
44ADA: 50% of receipts ≤ ₹50 lakh (₹75 lakh if cash ≤ 5%)
Tax audit 44AB: business turnover > ₹1 cr (₹10 cr if cash ≤ 5%) · profession > ₹50 lakh`],
['TDS – common sections',`192 Salary: slab rates · 194A Interest: 10% (₹50,000 banks)
194C Contractor: 1% individual/HUF · 2% others (₹30,000 single / ₹1 lakh yearly)
194H Commission: 2% · 194I Rent: 2% P&M · 10% land/building (₹6 lakh yearly)
194J: 10% professional · 2% technical services (₹50,000) · 194Q: 0.1% above ₹50 lakh · 194IA: 1% (≥ ₹50 lakh)`],
['Due dates & interest',`ITR: 31 July (non-audit) · 31 Oct (audit) · Belated/revised: 31 Dec
Advance tax: 15 Jun 15% · 15 Sep 45% · 15 Dec 75% · 15 Mar 100%
Interest: 234A 1%/month · 234B 1%/month · 234C 1%/month`]]},
{n:'Paper 3 · Taxation – GST',items:[
['Supply & value',`Intra-State: CGST + SGST/UTGST · Inter-State: IGST
Value (S.15) = Transaction value + Other taxes + Incidental expenses − Discounts
GST rates (from 22 Sep 2025): 5% · 18% · 40% (sin/luxury)`],
['Time of supply',`Goods: Earliest of invoice date · last date to issue invoice · payment date
Services: invoice within 30 days (45 for banks/NBFC/insurers) → earlier of invoice or payment; else earlier of service provided or payment
RCM goods: earliest of receipt · payment · 30 days from invoice date`],
['Registration & composition',`Threshold: ₹40 lakh goods · ₹20 lakh services (lower in special category states)
Inter-State supplier of goods: registration compulsory
Composition: turnover ≤ ₹1.5 cr · 1% manufacturers/traders · 5% restaurants · 6% services (₹50 lakh)`],
['Input Tax Credit',`S.16: tax invoice · receipt of goods/services · tax paid by supplier · return filed
Time limit: earlier of 30 Nov after FY end or annual return date
Set-off: IGST → IGST, CGST, SGST · CGST → CGST, IGST · SGST → SGST, IGST (CGST ↔ SGST never)`],
['Returns & late fee',`GSTR-1: 11th · GSTR-3B: 20th (monthly) · GSTR-9: 31 Dec
Late fee: ₹50 per day (₹20 for nil return) · Interest on late tax: 18% p.a. · Excess ITC claimed: 24% p.a.`],
['E-way bill & e-invoice',`E-way bill: consignment value > ₹50,000 · validity 1 day per 200 km (normal cargo)
E-invoice: aggregate turnover > ₹5 crore`]]}
]},
{id:'G2',name:'Inter · Group 2',note:'Costing · Audit · FM & SM – ICAI latest Study Material / SA-la confirm pannunga.',subs:[
{n:'Paper 4 · Cost & Management Accounting',items:[
['Cost sheet',`Prime cost = Direct material + Direct labour + Direct expenses
Factory cost = Prime cost + Factory overheads (± WIP adjustment)
Cost of production = Factory cost + Admin overheads (production related)
Cost of sales = Cost of production ± Finished goods adjustment + Selling & distribution overheads
Sales = Cost of sales + Profit`],
['EOQ & stock levels',`EOQ = √(2AO / C) · A annual demand · O order cost · C carrying cost per unit
Re-order level = Max usage × Max re-order period
Min level = ROL − (Normal usage × Normal re-order period)
Max level = ROL + ROQ − (Min usage × Min re-order period)
Average stock = (Min + Max)/2 · Danger level = Average usage × Min re-order period`],
['Labour – incentive plans',`Halsey = Time taken × Rate + 50% × Time saved × Rate
Rowan = Time taken × Rate + (Time saved / Time allowed) × Time taken × Rate
Taylor: below standard 80% · at/above standard 120% of piece rate
Merrick: up to 83% normal · 83–100% 110% · above 100% 120%`],
['Labour turnover',`Separation = Separations / Average workers × 100
Replacement = Replacements / Average workers × 100
Flux = (Separations + Accessions) / Average workers × 100`],
['Overheads & ABC',`OAR = Budgeted overhead / Budgeted base (units / labour hrs / machine hrs)
Over-absorbed = Absorbed − Actual · Under-absorbed = Actual − Absorbed
ABC: Cost driver rate = Cost pool / Cost driver volume`],
['Process costing',`Cost per unit = (Process cost − Scrap value of normal loss) / (Input − Normal loss units)
Abnormal loss = Units × Cost per unit · Equivalent units = Physical units × % completion
Joint products: NRV method = Final sales value − Further processing & selling costs`],
['Job · Batch · Contract costing',`EBQ = √(2DS / C) · D annual demand · S set-up cost · C carrying cost per unit
Notional profit = Value of work certified − Cost of work certified
Profit to P&L: below 25% complete nil · 25–50%: ⅓ × Notional profit × Cash received / Work certified · above 50%: ⅔ × same`],
['Standard costing variances',`Material: Price = AQ (SP − AP) · Usage = SP (SQ − AQ)
Labour: Rate = AH (SR − AR) · Efficiency = SR (SH − AH) · Idle time = Idle hours × SR
Fixed OH volume = (Actual output − Budgeted output) × Std rate
Favourable if actual cost < standard / actual sales > standard`],
['CVP (Marginal costing)',`Contribution = Sales − Variable cost
P/V ratio = Contribution / Sales × 100
BEP units = Fixed cost / Contribution per unit · BEP ₹ = Fixed cost / P/V ratio
Margin of safety = Actual sales − BEP sales
Required sales = (Fixed cost + Desired profit) / P/V ratio
Limiting factor → rank by Contribution per unit of key factor`],
['Budgets & service costing',`Production units = Sales + Closing FG − Opening FG
Purchases = Consumption + Closing RM − Opening RM
Transport: Tonne-km = Tonnes × Km · Absolute tonne-km = Σ (load × distance)`]]},
{n:'Paper 5 · Auditing & Ethics',items:[
['Audit risk model',`Audit risk = Risk of material misstatement × Detection risk
RMM = Inherent risk × Control risk
Performance materiality < Overall materiality`],
['Types of audit opinion',`Unmodified: true & fair
Qualified: material but not pervasive
Adverse: material and pervasive
Disclaimer: unable to obtain evidence, material and pervasive`],
['Auditor – eligibility',`Max 20 company audits per auditor (S.141) · excluded: OPC, dormant, small & private companies with paid-up capital < ₹100 cr
Disqualified if indebted to the company > ₹5 lakh or guaranteed > ₹1 lakh
Tenure: Individual 5 yrs · Firm 2 terms of 5 yrs · Cooling-off 5 yrs`],
['Key Standards on Auditing',`SA 200 objectives · 230 documentation · 240 fraud · 315 risk identification · 320 materiality · 330 responses to risk
SA 500 evidence · 505 confirmations · 530 sampling · 550 related parties · 560 subsequent events · 570 going concern · 580 representations
SA 700 / 705 / 706 audit reports · SA 701 Key Audit Matters (listed entities)`]]},
{n:'Paper 6 · Financial Management',items:[
['Time value & ratios',`FV = PV (1 + r)ⁿ · PV = FV / (1 + r)ⁿ
Current ratio = CA / CL · Quick ratio = (CA − Inventory) / CL
Debtors turnover = Credit sales / Avg debtors · Collection period = 365 / Debtors turnover
Interest coverage = EBIT / Interest · Debt-equity = Debt / Equity
ROCE = EBIT / Capital employed × 100 · P/E = MPS / EPS`],
['Cost of capital',`Kd (irredeemable, post-tax) = I (1 − t) / Net proceeds
Kd (redeemable) ≈ [I (1 − t) + (RV − NP)/n] / [(RV + NP)/2]
Ke (dividend growth) = D1 / P0 + g · Ke (CAPM) = Rf + β (Rm − Rf)
Retained earnings cost = Ke · WACC = Σ (Weight × Cost)`],
['Leverage & capital structure',`DOL = Contribution / EBIT · DFL = EBIT / EBT · DCL = DOL × DFL = Contribution / EBT
EBIT-EPS indifference: (EBIT − I1)(1 − t)/E1 = (EBIT − I2)(1 − t)/E2
MM with tax: V(levered) = V(unlevered) + Tax rate × Debt`],
['Capital budgeting',`NPV = Σ [Cash flow / (1 + r)ᵗ] − Initial outlay · PI = PV of inflows / Outlay
IRR = L + [NPV at L / (NPV at L − NPV at H)] × (H − L)
Payback = Investment / Annual inflow · ARR = Average PAT / Average investment × 100
Accept if NPV > 0, PI > 1, IRR > cost of capital`],
['Working capital',`Operating cycle = R + W + F + D − C
Cash conversion cycle = Inventory days + Debtor days − Creditor days
Cost of forgoing discount = [d / (100 − d)] × [365 / (Credit period − Discount period)]
Baumol: Optimal cash = √(2 × Annual cash need × Cost per transaction / Interest rate)`]]},
{n:'Paper 6 · Strategic Management',items:[
['Porter\'s Five Forces',`Threat of new entrants · Bargaining power of suppliers · Bargaining power of buyers · Threat of substitutes · Rivalry among existing competitors`],
['BCG matrix · Ansoff matrix',`BCG: Stars (high growth, high share) · Cash cows (low growth, high share) · Question marks (high growth, low share) · Dogs (low growth, low share)
Ansoff: Market penetration · Market development · Product development · Diversification`],
['Generic strategies · Value chain',`Porter generic: Cost leadership · Differentiation · Focus
Value chain primary: Inbound logistics · Operations · Outbound logistics · Marketing & sales · Service
Support: Firm infrastructure · HRM · Technology · Procurement`],
['Corporate strategies · 7S · 5Ps',`Stability · Growth (concentration, integration, diversification) · Retrenchment (turnaround, divestment, liquidation)
McKinsey 7S: Strategy · Structure · Systems · Shared values · Skills · Style · Staff
Mintzberg 5Ps: Plan · Ploy · Pattern · Position · Perspective`]]}
]}
];
