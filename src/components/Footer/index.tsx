import { SectionFooter } from '../Section'
import { LogoFooter } from '../../assets/Logos/LogoFooter'
import { FooterOptionsProvider } from '../../providers/footerProvider'
import {
  FooterContent,
  OptionsContainer,
  OptionsExplorar,
  OptionsWrapper,
  Option,
  TeslaName,
  TeslaAddress
} from './styles'

export const Footer = ({ className }: { className?: string }) => {
  return (
    <SectionFooter className={className}>
      <FooterContent>
        <LogoFooter />

        <OptionsContainer>
          <OptionsWrapper>
            <h2>EXPLORAR</h2>
            <OptionsExplorar>
              {FooterOptionsProvider.explorar.map((group, index) => {
                return (
                  <OptionsWrapper key={index}>
                    {group.map(item => {
                      return (
                        <Option key={item.label} to={item.to}>
                          {item.label}
                        </Option>
                      )
                    })}
                  </OptionsWrapper>
                )
              })}
            </OptionsExplorar>
          
          </OptionsWrapper>
          

          <OptionsWrapper>
            <h2>SOCIAL</h2>
            {FooterOptionsProvider.social.map(item => {
              return (
                <Option key={item.label} to={item.to}>
                  {item.label}
                </Option>
              )
            })}
          </OptionsWrapper>
        </OptionsContainer>

        <div>
          <TeslaName>FÓRMULA TESLA UFMG</TeslaName>
          <TeslaAddress>
            <a href='https://encurtador.com.br/giLS1'>
              Av. Pres. Antônio Carlos 6627 - Escola de Engenharia - Pampulha, Belo Horizonte - MG
              </a>
          </TeslaAddress>
        </div>
      </FooterContent>
    </SectionFooter>
  )
}
